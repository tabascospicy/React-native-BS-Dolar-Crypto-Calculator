import { StatusBar } from 'expo-status-bar';
import React, {FC} from 'react';
import { Text, View } from 'react-native';
import styles from "./style"
import {CoinType} from "interfaces/interfaces";
const Result : FC<CoinType>  = ({Mount= "0.00",Title="Dolar",Icon="Icon"},) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}> {Icon}</Text>
      <Text style={styles.FontTitle}> {Title}</Text>
      <Text style={styles.FontMount}> {Mount}</Text>
    </View>
  );
}
export default Result;