import { StatusBar } from 'expo-status-bar';
import React, {FC,useEffect,useState} from 'react';
import { Text, View } from 'react-native';
import styles from "./style"
import {props} from "interfaces/interfaces";
import Result from "./../../components/result/result";
import Card from "./../../components/card/card";
import List from "./../../components/list/list";

const Home : FC<props>  = ({name}) => {

  return (
    <View style={styles.container}>
      <Result />
      <Card />
      <List />
      <StatusBar style="auto" />
    </View>
  );
}
export default Home;
