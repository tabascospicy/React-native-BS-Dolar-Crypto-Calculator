import React, {FC,useContext, useEffect} from 'react';
import { Text, View } from 'react-native';
import styles from "./style"
import {props,GlobalState} from "interfaces/interfaces";
import StateContext from "./../../services/context";
import Colors from "./../../themes/colors";
import accounting from 'accounting';
import HeaderCard from "./../headerCard/HeaderCard";
const Result : FC<props>  = ({name}) => {
  const State : GlobalState  = useContext(StateContext);
  const {result , destiny , input , origin,supportedCoins} = State;
  const holi = {
    "Bs" : 1,
    "$":2
  }
 
  return (
    <View style={styles.container}>
      <HeaderCard text={"Resultado"} symbol={destiny} image={Object.keys(supportedCoins)[origin]} mount={result ? result:""}></HeaderCard>
      <HeaderCard text={"Ingresado"} symbol={destiny} image={destiny?.split("").length==3 ? "BS" : "USD"} mount={input ? input :""}></HeaderCard>
    </View>
  );
}
export default Result;