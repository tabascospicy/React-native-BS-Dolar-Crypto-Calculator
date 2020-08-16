import { StyleSheet } from "react-native";
import Colors from "./../../themes/colors"
const style = StyleSheet.create({
  container:{
    flex:1,
    //width:"100%",
   
  },
  scrollView:{
   alignItems: "center",
// justifyContent:"center",
    //width:"100%",
  },
  separator:{
    height:3,
    width:"90%",
    opacity:0.3,
    borderTopEndRadius:80,
    borderTopStartRadius:80,
  }
})

  
export default style;