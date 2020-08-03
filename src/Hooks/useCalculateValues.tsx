import {  useEffect, useContext, useRef,useCallback } from "react";
import { GlobalState } from "interfaces/interfaces";
import StateContext from "./../services/context";
import accounting from "accounting";
import result from "components/result/result";
const useCalculateValues = () => {
    let value = "";
    const formated = useRef("0");
    const BCV = useRef(false);
    const State: GlobalState = useContext(StateContext);

    const {
        calculatedValues,
        setCalculatedValues,
        supportedCoins,
        inverted,
        originName,
        setInverted,
        selectedDestiny, 
        setSelectedDestiny
    } = State;
    
    useEffect(() => {
      if(originName?.toString() === "USDBCV"){
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
        calculatedValues.input && calculateAndSend(parseFloat(calculatedValues.input));
    }, [selectedDestiny]);

    useEffect(() => {
        calculateAndSend(calculatedValues.result);
    }, [inverted.current]);

    const addNumber = (number: number) => {
     requestAnimationFrame(()=>{
       let value =
            calculatedValues.input == "0"
                ? `${number}`
                : `${calculatedValues.input}${number}`;
        value = value.includes(".") ? formated.current + `${number}` : value;
        calculateAndSend(parseFloat(value));
     })
    };
    const addCero = ()=>{
      requestAnimationFrame(()=>{
        let decimal = "0";
        let value = `${calculatedValues.input}${decimal}`;
        //calculateAndSend(parseFloat(value));
        formated.current = value;
        setCalculatedValues(prev=>{return{result:calculatedValues.result,input:value}})
      })
    }
    const addDecimals = () => {
      requestAnimationFrame(()=>{
         let decimal = ".";
        let value = calculatedValues.input?.toString().includes(".")
            ? `${formated.current}`
            : `${formated.current}${decimal}`;
        //calculateAndSend(parseFloat(value));
        formated.current = value;
        setCalculatedValues(prev=>{return{result:calculatedValues.result,input:value}})
      })
    };
    const remove = () => {
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
        calculateAndSend(parseFloat(value));
      })
    };
    const calculateResult = {
      original: useCallback((amount)=>{return selectedDestiny === 1 ? supportedCoins[originName]["Mount"] * amount * supportedCoins["Bs"]["BS"] : supportedCoins[originName]["Mount"] * amount },[selectedDestiny,supportedCoins,originName]),
      inverted: useCallback((amount)=>{return selectedDestiny === 1 ? (supportedCoins[originName]["Mount"] / amount) / supportedCoins["Bs"]["BS"] :  amount  / supportedCoins[originName]["Mount"]  },[selectedDestiny,supportedCoins,originName]),
    }
    const calculateAndSend = (amount: number | string) => {
      
        const calculated = inverted ?  calculateResult.inverted(amount):  calculateResult.original(amount) ;
        setCalculatedValues &&
            setCalculatedValues((prev) => {
                return {
                    result:calculated.toString(),
                    input:amount.toString()
                };
            });
    };
    const invert = () => {
    setInverted &&  setInverted(!inverted);
    };
    useEffect(() => {
        calculatedValues &&
            calculateAndSend(parseFloat(calculatedValues.input));
    }, [selectedDestiny]);

    return {
        calculateAndSend,
        invert,
        setSelectedDestiny,
        remove,
        selectedDestiny,
        addDecimals,
        addNumber,
        addCero
    };
};

export default useCalculateValues;
