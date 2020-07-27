import React, { FC,useCallback,useContext,useState,useEffect } from "react";
import {View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Button from "./../Buttom/Buttom";
import { Entypo } from '@expo/vector-icons'; 
import {GlobalState} from "interfaces/interfaces";
import StateContext from "./../../services/context";
import { Radio, RadioGroup } from "@ui-kitten/components";
import accounting from "accounting";
const Calculator: FC = () => {
  let value = "";
  const [formated,setFormated] = useState("0");
  const State: GlobalState = useContext(StateContext);
    const {
        setResult,
        supportedCoins,
        origin,
        setDestiny,
        input,
        setInput
    } = State;
    const addNumber = (number:number) =>{
     let value = (input == "0") ? `${number}` : `${input}${number}`;
     value = value.includes('.') ? formated + `${number}` : value;
     setFormated((prev)=> value.includes('.') ? value  : accounting.formatNumber(parseInt(value)));
     setInput && setInput((prev) => value);
     calculateAndSend(parseFloat(value));
    }
    const addDecimals = (decimal : string) =>{
        let value =  (input?.toString().includes('.')) ? `${formated}` : `${formated}${decimal}`;
        setFormated(prev=>value)
        setInput && setInput((prev) => value);
        calculateAndSend(parseFloat(value));
    }
    const remove = ()=>{
      let array = input?.split("");
      if(input == "0" || input==="" || input.length==1){
        value = "0";
      }else{
        array?.pop();
        array && (value = array.join(""));
      }
      setInput && setInput((prev)=>value);
      calculateAndSend(parseFloat(value))
    }

    
    const [selectedDestiny, setSelectedDestiny] = useState(0);
    

    const calculateAndSend = (amount: number | string) => {
        let row = origin && origin;
        let key = `${supportedCoins && Object.keys(supportedCoins)[row]}`;
        let calculatedMount =
            supportedCoins && supportedCoins[key]["Mount"] * amount;
        setDestiny &&
            setDestiny((prev) => (selectedDestiny == 1 ? " Bs" : " $"));
        setResult &&
            setResult((prev) =>
                selectedDestiny == 1
                    ? calculatedMount * supportedCoins["Bs"]["BS"]
                    : calculatedMount
            );
    };
    useEffect(() => {
          input &&  calculateAndSend(parseFloat(input));
    }, [selectedDestiny]);


  const Numbers = [1,2,3,4,5,6,7,8,9];
    return (
      <View style={styles.container}>
          <View style={styles.buttonsRow}>
              <View style={styles.numbers}>
                  {Numbers.map((element,i)=>{
                    return(
                    <Button key={i} press={()=>addNumber(element)}>
                      <Text style={[styles.number,{color:"#000"}]}>{element}</Text>
                    </Button>
                    )
                  })}
                  <Button press={()=>addDecimals('.')}>
                     <Text style={[styles.number,{color:"#000"}]}>.</Text>
                  </Button>
                   <Button press={()=>addNumber(0)}>
                    <Text style={[styles.number,{color:"#000"}]}>0</Text>
                  </Button>
                   <Button press={()=>remove()}>
                    <Entypo style={styles.number} name="erase" size={24} color="black" />
                  </Button>
              </View>
          </View>
         {Object.keys(supportedCoins)[origin] !== "USD" && <RadioGroup
                        style={styles.selectDestiny}
                        selectedIndex={selectedDestiny}
                        onChange={(index) => setSelectedDestiny(index)}
                    >
                      <Radio>USD</Radio>  
                      <Radio>BS</Radio>
            </RadioGroup>}
      </View>
    );
};
export default Calculator;