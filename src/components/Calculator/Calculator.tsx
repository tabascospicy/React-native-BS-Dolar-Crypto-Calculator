import React, { FC } from "react";
import {View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Button from "./../Buttom/Buttom";
import Colors from "./../../themes/colors";
import { AntDesign } from "@expo/vector-icons";
const Calculator: FC = () => {
  let value = "";
    const addNumber = (number:number) =>{
      value = `${value}${number}`;
      console.log(value);
    }
    const remove = ()=>{
      let array = value.split("");
      value = array.pop().join("");
      console.log(value);
    }
  const Numbers = [1,2,3,4,5,6,7,8,9,0];
    return (
      <View style={styles.container}>
          <View style={styles.buttonsRow}>
              <View style={styles.numbers}>
                  {Numbers.map((element,i)=>{
                    <Button press={()=>addNumber(element)}>
                      <Text style={[styles.number,{color:Colors?.light}]}>{element}</Text>
                    </Button>
                  })}
              </View>
              <View style={styles.actions}>
                  <Button press={()=>remove()}>
                      <AntDesign
                          style={{ opacity: 1 }}
                          name="back"
                          size={24}
                          color="black"
                      />
                  </Button>
              </View>
          </View>
          <View style={styles.exchangeButton}>
              <Button press={()=>console.log("no listo")}>
                <Text>Intercambiar</Text>
              </Button>
          </View>
      </View>
    );
};
export default Calculator;