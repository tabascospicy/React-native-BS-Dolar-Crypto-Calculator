import { StyleSheet } from "react-native";



const style = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:"center",
    flexDirection:"row",
    maxHeight:100,
    flexWrap:"wrap",
    alignSelf:"flex-start",
    paddingTop:40,
    paddingLeft:20
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