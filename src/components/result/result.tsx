import React, {FC,useContext} from 'react';
import { Text, View } from 'react-native';
import styles from "./style"
import {props,CoinType,GlobalState} from "interfaces/interfaces";
import StateContext from "./../../services/context";
import accounting from 'accounting';

const Result : FC<props>  = ({name}) => {
  const State : GlobalState  = useContext(StateContext);
  const {result , destiny} = State;
 
  return (
    <View style={styles.container}>
      <Text adjustsFontSizeToFit={true} style={styles.Font}> {result && accounting.formatMoney(result,{symbol:destiny,thousand:',',decimal:'.'})}</Text>
    </View>
  );
}
export default Result;