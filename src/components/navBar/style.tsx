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
    borderBottomWidth:1,
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
  button:{
  padding:10,
   borderRadius:15, 
   
   shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  shadowColor: Colors.secondary,
  elevation: 24,
   alignSelf:"flex-end",
   marginLeft:"auto",
   marginRight:15,
  },
  icon:{
  
  }
})
export default style;