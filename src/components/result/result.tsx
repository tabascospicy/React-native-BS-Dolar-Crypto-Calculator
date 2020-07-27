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
     {supportedCoins && Object.keys(supportedCoins)[origin ? origin : 0]==="USD" ? <HeaderCard text={"Resultado"} symbol={"Bs "} image={"BS" } mount={result ? result:""}></HeaderCard> : <HeaderCard text={"Resultado"} symbol={destiny} image={destiny?.split("").length==3 ? "BS" : "USD"} mount={result ? result:""}></HeaderCard>}
      <HeaderCard input={true} text={"Ingresado"} symbol={"$"} image={supportedCoins && Object.keys(supportedCoins)[origin ? origin :0]} mount={input ? input :""}></HeaderCard>
    </View>
  );
}
export default Result;