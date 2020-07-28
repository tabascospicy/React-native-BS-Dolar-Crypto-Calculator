import React, { FC,useContext,useEffect} from "react";
import {View, Text} from "react-native";
import styles from "./style";
import Button from "./../Buttom/Buttom";
import { Entypo } from '@expo/vector-icons'; 
import Colors from "./../../themes/colors";
import {GlobalState} from "interfaces/interfaces";
import StateContext from "./../../services/context";
import { Radio, RadioGroup } from "@ui-kitten/components";
import useCalculatedValues from "./../../Hooks/useCalculateValues";
const Calculator: FC = () => {
  let value = "";
  const {supportedCoins,originName}: GlobalState = useContext(StateContext);
  const {addCero,invert,setSelectedDestiny,remove,addDecimals,addNumber,selectedDestiny} = useCalculatedValues();
  useEffect(()=>{
    console.log(originName)
  },[])

  const Numbers = [1,2,3,4,5,6,7,8,9];
    return (
      <View style={styles.container}>
          <View style={styles.buttonsRow}>
              <View style={styles.numbers}>
                  {Numbers.map((element,i)=>{
                    return(
                    <Button style={styles.containerInput} key={i} press={()=>addNumber(element)}>
                      <Text style={[styles.number,{color:"#000"}]}>{element}</Text>
                    </Button>
                    )
                  })}
                  <Button style={styles.containerInput} press={addDecimals}>
                     <Text style={[styles.number,{color:"#000"}]}>.</Text>
                  </Button>
                   <Button style={styles.containerInput} press={()=>addCero()}>
                    <Text style={[styles.number,{color:"#000"}]}>0</Text>
                  </Button>
                   <Button style={styles.containerInput} press={remove}>
                    <Entypo style={styles.number} name="erase" size={24} color="black" />
                  </Button>
              </View>
          </View>
         {originName !== "USD" && <RadioGroup
                        style={styles.selectDestiny}
                        selectedIndex={selectedDestiny}
                        onChange={(index) => setSelectedDestiny(index)}
                    >
                      <Radio>USD</Radio>  
                      <Radio>BS</Radio>
            </RadioGroup>} 
            <Button style={styles.exchangeButton} press={invert}>
                    <Text style={styles.exchangeText}   >Intercambiar</Text>
                  </Button>
      </View>
    );
};
export default Calculator;