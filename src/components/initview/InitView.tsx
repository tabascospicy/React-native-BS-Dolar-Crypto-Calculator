import React, {FC,useContext,useEffect} from 'react';
import { View,Image,Text } from 'react-native';
import styles from "./style"
import {GlobalState} from "interfaces/interfaces";
import StateContext from "services/context";
const InitView : FC  = () => {

const State : GlobalState  = useContext(StateContext);

const {setPresentacion,setDark,refresh} = State;

  useEffect(()=>{
      setTimeout(()=>{
      setPresentacion(false);
      setDark(true);
    },2200)
  },[])

  return (
    <View style={styles.container}>
      <Image source={require("./../../assets/AftimSplash.png")} style={styles.image}/>
    </View>
  );
}
export default InitView;