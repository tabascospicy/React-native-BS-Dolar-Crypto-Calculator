import { StyleSheet } from "react-native";
import Colors from "./../../themes/colors";
const style = StyleSheet.create({
  container:{
   flex:1,
    maxHeight:190,
    flexWrap:"wrap",
 //   marginBottom:80,
    alignItems:"center",
    justifyContent:"center",
  },
  coinValue:{
    fontSize:20,
    padding:10,
    color:Colors.light,
    fontWeight:"bold",
  }
})

  
export default style;