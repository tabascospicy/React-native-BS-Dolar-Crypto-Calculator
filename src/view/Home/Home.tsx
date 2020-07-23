import { StatusBar } from 'expo-status-bar';
import React, {FC,useEffect,useContext,useState} from 'react';
import styles from "./style"
import {View} from "react-native";
import Result from "./../../components/result/result";
import Card from "./../../components/card/card";
import List from "./../../components/list/list";
import {props,GlobalState} from "interfaces/interfaces";
import StateContext from "./../../services/context";
import { Avatar, Button, Layout, Popover, Text } from '@ui-kitten/components';
const Home : FC<props>  = ({name}) => {
  const State : GlobalState  = useContext(StateContext);
  const {selected} = State;
 
  return (
    <View style={styles.container}> 
    <StatusBar style="light" />
    {
        selected ? <Result />: <></>
      }
      
      {
        selected ? <Card  />: <List />
      }
     
    </View>
  );
}
export default Home;
