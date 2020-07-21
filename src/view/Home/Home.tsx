import { StatusBar } from 'expo-status-bar';
import React, {FC,useEffect,useContext,useState} from 'react';
import { Text, View } from 'react-native';
import styles from "./style"
import Result from "./../../components/result/result";
import Card from "./../../components/card/card";
import List from "./../../components/list/list";
import {props,GlobalState} from "interfaces/interfaces";
import StateContext from "./../../services/context";
const Home : FC<props>  = ({name}) => {
  const State : GlobalState  = useContext(StateContext);
  const {selected} = State;
 
  return (
    <View style={styles.container}>
      <Result />
      {
        selected ? <Card  /> : <List />
      }
      <StatusBar style="light" />
    </View>
  );
}
export default Home;
