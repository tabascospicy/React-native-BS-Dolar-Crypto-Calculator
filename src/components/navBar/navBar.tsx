import React, {FC,useContext} from 'react';
import { View,Image,Text } from 'react-native';
import styles from "./style"
import {GlobalState} from "interfaces/interfaces";
import StateContext from "./../../services/context";
const NavBar : FC  = () => {

const State : GlobalState  = useContext(StateContext);

const {supportedCoins,Colors} = State;

  return (
    <View style={styles.container}>
      <Image source={require("./../../assets/AFTIM.png")} style={styles.image}/>
      <Text style={[styles.font,{color:Colors?.light}]}>Aftim Calculator</Text>
    </View>
  );
}
export default NavBar;