import React, {FC,useContext} from 'react';
import { View,Image,Text,TouchableOpacity,LayoutAnimation} from 'react-native';
import styles from "./style"
import {GlobalState} from "interfaces/interfaces";
import StateContext from "./../../services/context";
import Icon from 'react-native-vector-icons/Entypo'; 
import { useTheme } from '@react-navigation/native';
import {ColorsThemes} from "themes/colors";
const NavBar : FC  = () => {
const {colors,setRefresh,ResetCall,refresh,dark,setDark}: GlobalState  = useContext(StateContext);
   
const handleRefresh = ()=>{
    requestAnimationFrame(()=>{
      setDark(!dark);
    })
}


  return (
    <View style={[styles.container,{backgroundColor:colors?.light,borderBottomColor:colors?.secondary }]}>
      <Image source={require("./../../assets/AFTIM.png")} style={styles.image}/>
      <Text style={[styles.font,{color:colors?.font }]}>Aftim Cotiza</Text>
      <TouchableOpacity disabled={refresh.onLoad} style={[styles.button,{backgroundColor:colors?.secondary}]} onPress={handleRefresh}>
        <Text><Icon  name={dark ? 'light-bulb' : 'light-up'} size={18} color={"white" } /></Text>
      </TouchableOpacity>
    </View>
  );
}
export default NavBar;