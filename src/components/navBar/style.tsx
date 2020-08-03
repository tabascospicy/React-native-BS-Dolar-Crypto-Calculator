import { StyleSheet } from "react-native";
import Colors from "./../../themes/colors";


const style = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:"flex-start",
    flexDirection:"row",
    maxHeight:100,
    position:"relative",
    flexWrap:"wrap",
    alignItems:"center",
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
  },
  icon:{
   position:"absolute",
   right:0,
   paddingTop:30,
   paddingRight:40,
  }
})
export default style;