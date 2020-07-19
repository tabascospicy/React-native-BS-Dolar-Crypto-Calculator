import React, {FC} from 'react';
import { View } from 'react-native';
import styles from "./style"
import {props,CoinType} from "interfaces/interfaces";
import CoinCard from "./../coinCard/coinCard";
import {testTypes} from "./../../testVariables/coinTypes";

const List : FC  = ({coins = []}) => {

  return (
    <View style={styles.container}>
      {coins.map((element :CoinType)  => <CoinCard {...element}/>)}
      <CoinCard />
    </View>
  );
}
export default List;