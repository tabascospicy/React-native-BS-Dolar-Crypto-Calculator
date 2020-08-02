import { StyleSheet } from "react-native";
import Colors from "./../../themes/colors";


const style = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:"flex-start",
    flexDirection:"row",
    maxHeight:100,
    flexWrap:"wrap",
    alignSelf:"flex-start",
    paddingTop:40,
    width:"100%",
    paddingLeft:20,
    backgroundColor:Colors.light,
    borderBottomWidth:1,
    borderBottomColor:Colors.strong,
  },
  image:{
    height:50,
    width:50,
    borderRadius: 25
  },
  font : {
    fontSize:23,
    fontWeight:"bold",
    padding:10,
    letterSpacing:2
  }
})
export default style;