import React, { FC,useContext,useEffect} from "react";
import {View, Text} from "react-native";
import styles from "./style";
import Button from "./../Buttom/Buttom";
import Colors from "./../../themes/colors";
import {GlobalState} from "interfaces/interfaces";
import StateContext from "./../../services/context";
import { Radio, RadioGroup } from "@ui-kitten/components";
import useCalculatedValues from "./../../Hooks/useCalculateValues";
import Icon from 'react-native-vector-icons/AntDesign'; 
import Back from 'react-native-vector-icons/Entypo';
const Calculator: FC = () => {
  let value = "";
  const {originName}: GlobalState = useContext(StateContext);
  const {addCero,invert,setSelectedDestiny,remove,addDecimals,addNumber,selectedDestiny} = useCalculatedValues();
  

  const Numbers = [1,2,3,4,5,6,7,8,9];
    return (
      <View style={styles.container}>
          <View style={styles.buttonsRow}>
              <View style={styles.numbers}>
                  {Numbers.map((element,i)=>{
                    return(
                    <Button style={styles.containerInput} key={i} press={()=>addNumber(element)}>
                      <Text style={[styles.number,{color:Colors.font}]}>{element}</Text>
                    </Button>
                    )
                  })}
                  <Button style={styles.containerInput} press={addDecimals}>
                     <Text style={[styles.number,{color:Colors.font}]}>.</Text>
                  </Button>
                   <Button style={styles.containerInput} press={()=>addCero()}>
                    <Text style={[styles.number,{color:Colors.font}]}>0</Text>
                  </Button>
                   <Button style={styles.containerInput} press={remove}>
                   <Back style={styles.number} name="erase" size={24} color={`${Colors?.font}`} />
                  </Button>
              </View>
          </View>
         {(!(originName === "USD") && !(originName === "USDBCV")) && <RadioGroup
                        style={styles.selectDestiny}
                        selectedIndex={selectedDestiny}
                        onChange={(index) => setSelectedDestiny(index)}
                    >
                      <Radio style={styles.padd}>USD</Radio>  
                      <Radio style={styles.padd}>BS</Radio>
            </RadioGroup>} 
            <Button style={[styles.exchange,{backgroundColor: Colors?.secondary}]} press={invert}>
                <Text style={[styles.exchangeText,{color:Colors?.white}]}   >
                  Calcular
                  <Icon  name="retweet" size={20} color={`${Colors?.font}`} />
                </Text>
            </Button>
      </View>
    );
};
export default Calculator;