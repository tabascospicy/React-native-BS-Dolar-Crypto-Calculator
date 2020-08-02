import React, { FC,useContext,useEffect} from "react";
import {View, Text} from "react-native";
import styles from "./style";
import Button from "components/Buttom/Buttom";
import { Entypo } from '@expo/vector-icons'; 
import Colors from "themes/colors";
import {GlobalState} from "interfaces/interfaces";
import StateContext from "services/context";
import useCalculatedValues from "Hooks/useCalculateValues";
import { AntDesign } from '@expo/vector-icons'; 
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
                    <Entypo style={styles.number} name="erase" size={24} color={`${Colors?.font}`}  />
                  </Button>
              </View>
          </View>
            <Button style={[styles.exchange,{backgroundColor: Colors?.secondary}]} press={invert}>
                <Text style={[styles.exchangeText,{color:Colors?.white}]}   >
                  Calcular
                  <AntDesign  name="retweet" size={20} color={`${Colors?.font}`} />
                </Text>
            </Button>
      </View>
    );
};
export default Calculator;