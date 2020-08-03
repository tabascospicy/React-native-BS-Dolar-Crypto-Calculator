import React, {FC,useContext} from 'react';
import { View,Image,Text } from 'react-native';
import styles from "./style"
import {GlobalState} from "interfaces/interfaces";
import StateContext from "./../../services/context";
import Icon from 'react-native-vector-icons/AntDesign'; 
import Colors from "./../../themes/colors";
const NavBar : FC  = () => {

const State : GlobalState  = useContext(StateContext);

const {supportedCoins,Colors} = State;

  return (
    <View style={styles.container}>
      <Image source={require("./../../assets/AFTIM.png")} style={styles.image}/>
      <Text style={[styles.font,{color:Colors?.font}]}>Aftim Cotiza</Text>
      <Icon style={styles.icon} name="areachart" size={33} color={`${Colors?.font}`} />
    </View>
  );
}
export default NavBar;