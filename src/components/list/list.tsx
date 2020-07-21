import React, {FC,useContext} from 'react';
import { View } from 'react-native';
import styles from "./style"
import {props,CoinType,GlobalState} from "interfaces/interfaces";
import CoinCard from "./../coinCard/coinCard";
import StateContext from "./../../services/context";
const List : FC  = () => {

const State : GlobalState  = useContext(StateContext);

const {supportedCoins} = State;

  return (
    <View style={styles.container}>
      {Object.keys(supportedCoins).map((element, i:number)  => { 
        let value = supportedCoins[element];
        return <CoinCard key={i} {...value}/>})}
    </View>
  );
}
export default List;