import React, {FC,useContext} from 'react';
import { Text, View   , TouchableHighlight} from 'react-native';
import styles from "./style"
import {CoinType} from "interfaces/interfaces";
import accounting from 'accounting';
import StateContext from "./../../services/context";
import { GlobalState } from "interfaces/interfaces";
const Result : FC<CoinType>  = ({key = 1 ,BS= "0,00",Title="Dolar",Icon="Icon"},) => {

  const State : GlobalState = useContext(StateContext);
  const {setOrigin,setSelected} = State;
  const lol = (key : number) =>{
     setOrigin && setOrigin(key);
     setSelected && setSelected(true);
  }
  
  return (
    <TouchableHighlight 
    activeOpacity={0.6}
    underlayColor="#fff"
    onPress={()=>lol(key)}
    style={styles.container} >
      <>
      <Text style={styles.icon}> {Icon}</Text>
      <Text style={styles.FontTitle}> {Title}</Text>
      <Text style={styles.FontMount}> {accounting.formatMoney(BS,{symbol:"Bs ",thousand:'.',decimal:','})}</Text>
      </>
    </TouchableHighlight>
  );
}
export default Result;