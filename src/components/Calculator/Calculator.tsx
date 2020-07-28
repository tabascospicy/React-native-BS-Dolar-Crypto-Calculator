import React, { FC,useContext,useState } from "react";
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
  const {supportedCoins,origin}: GlobalState = useContext(StateContext);
  const {invert,setSelectedDestiny,remove,addDecimals,addNumber,selectedDestiny} = useCalculatedValues();


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
                   <Button style={styles.containerInput} press={()=>addNumber(0)}>
                    <Text style={[styles.number,{color:"#000"}]}>0</Text>
                  </Button>
                   <Button style={styles.containerInput} press={remove}>
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
            <Button style={styles.exchangeButton} press={invert}>
                    <Text style={styles.exchangeText}   >Exchange</Text>
                  </Button>
      </View>
    );
};
export default Calculator;