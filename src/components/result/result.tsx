import { StatusBar } from 'expo-status-bar';
import React, {FC} from 'react';
import { Text, View } from 'react-native';
import styles from "./style"
import {props} from "interfaces/interfaces";
const Result : FC<props>  = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Font}> 0.00</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default Result;