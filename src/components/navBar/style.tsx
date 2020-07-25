import { StyleSheet } from "react-native";



const style = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"row",
    maxHeight:170,
    alignSelf:"flex-start",
    padding:10,
  },
  image:{
    height:50,
    width:50,
    borderRadius: 25
  },
  font : {
    fontSize:30,
    fontWeight:"bold",
    padding:10,
    letterSpacing:2
  }
})
export default style;