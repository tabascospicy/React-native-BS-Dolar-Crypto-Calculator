import React, {FC} from 'react';
import { Text, View } from 'react-native';
import styles from "./style"
import {CoinType} from "interfaces/interfaces";
import accounting from 'accounting';
const Result : FC<CoinType>  = ({BS= "0,00",Title="Dolar",Icon="Icon"},) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}> {Icon}</Text>
      <Text style={styles.FontTitle}> {Title}</Text>
      <Text style={styles.FontMount}> {accounting.formatMoney(BS,{symbol:"Bs ",thousand:'.',decimal:','})}</Text>
    </View>
  );
}
export default Result;