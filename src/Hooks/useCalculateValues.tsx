import {  useEffect, useContext, useRef,useCallback, useState} from "react";
import { GlobalState } from "interfaces/interfaces";
import StateContext from "services/context";
import accounting from "accounting";
import result from "components/result/result";
const useCalculateValues = () => {
    let value = "";
    const formated = useRef("0");
    const State: GlobalState = useContext(StateContext);
    
    const {
        calculatedValues,
        setCalculatedValues,
        supportedCoins,
        inverted,
        originName,
        setInverted,
        selectedDestiny, 
        setSelectedDestiny,
        colors
    } = State;
    const [, updateState] = useState();
    const originalFunction  = useCallback((amount)=>{ return selectedDestiny == 1 ? supportedCoins[originName]["Mount"] * amount * supportedCoins["Bs"]["BS"] : supportedCoins[originName]["Mount"] * amount },[originName,selectedDestiny]);
    const invertedFunction = useCallback((amount)=>{ return selectedDestiny == 1 ? ( amount / supportedCoins[originName]["Mount"]) / supportedCoins["Bs"]["BS"] :  amount  / supportedCoins[originName]["Mount"]  },[originName,selectedDestiny]);
  const calculateFunction = useRef(originalFunction)

    useEffect(() => {
      if(originName?.toString() === "USDBCV" ||originName?.toString() === "USD" ){
        setInverted && setInverted(true);
      }
        return () => { 
          setSelectedDestiny && setSelectedDestiny(0);
          setInverted && setInverted(false);
          calculatedValues && setCalculatedValues((prev) => { return { input: "0", result: "0" };
        });
        };
    }, []);

    useEffect(() => {
        formated.current = calculatedValues.input?.toString().includes(".")
            ? calculatedValues.input
            : accounting.formatNumber(parseInt(calculatedValues.input));
    }, [calculatedValues]);

    useEffect(() => {
      calculateFunction.current = inverted ? invertedFunction : originalFunction
        calculatedValues.input && calculateAndSend(parseFloat(calculatedValues.input));
    }, [selectedDestiny]);

    useEffect(() => {
       calculateFunction.current = inverted ? invertedFunction : originalFunction
       calculateAndSend(calculatedValues.result);
    }, [inverted]);

    const addNumber = useCallback( (number: number) => {
      requestAnimationFrame(()=>{
        let value =
            calculatedValues.input == "0"
                ? `${number}`
                : `${calculatedValues.input}${number}`;
        value = value.includes(".") ? formated.current + `${number}` : value;
        setCalculatedValues((prev) => {
          return {
              result:calculatedValues.result,
              input:value
          };
      });
      })
    },[formated,calculatedValues]);

    const addCero = useCallback( ()=>{
      requestAnimationFrame(()=>{
        let decimal = "0";
        let value = `${calculatedValues.input}${decimal}`;
        calculateAndSend(parseFloat(value));
        formated.current = value;
        setCalculatedValues(prev=>{return{result:calculatedValues.result,input:value}})
      })

    },[calculatedValues,formated]);
    const addDecimals = useCallback(() => {
      requestAnimationFrame(()=>{
         let decimal = ".";
        let value = calculatedValues.input?.toString().includes(".")
            ? `${formated.current}`
            : `${formated.current}${decimal}`;
        formated.current = value;
        setCalculatedValues(prev=>{return{result:calculatedValues.result,input:value}})
      })
    },[formated,calculatedValues]);
    const remove =useCallback( () => {
      requestAnimationFrame(()=>{
        let array = calculatedValues.input?.toString().split("");
        if (
            calculatedValues.input == "0" ||
            calculatedValues.input === "" ||
            calculatedValues.input.length == 1
        ) {
            value = "0";
        } else {
            array?.pop();
            array && (value = array.join(""));
        }
        setCalculatedValues((prev) => {
          return {
              result:calculatedValues.result,
              input:value
          };
      });
      })
    },[calculatedValues]);
    
    const calculateAndSend =useCallback( (amount: number | string) => {
        const calculated = calculateFunction.current(amount) ;
        setCalculatedValues &&
            setCalculatedValues((prev) => {
                return {
                    result:calculated.toString(),
                    input:amount.toString()
                };
            });
    },[calculateFunction]);
    
    const calculate =useCallback(()=>{
      requestAnimationFrame(()=>{
        calculateAndSend(calculatedValues.input);
      })
    },[calculatedValues])
    useEffect(() => {
        calculatedValues &&
            calculateAndSend(parseFloat(calculatedValues.input));
    }, [selectedDestiny]);

    return {
      inverted,
      setInverted,
        originName,
        calculateAndSend,
        setSelectedDestiny,
        remove,
        selectedDestiny,
        addDecimals,
        addNumber,
        addCero,
        calculatedValues,
        setCalculatedValues,
        calculate,
        colors
    };
};

export default useCalculateValues;
