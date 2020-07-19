import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container:{
    flex:1,
    width:"90%",
    borderRadius:10,
    backgroundColor:"#212e4e"
  },
  titleFont:{
      fontSize:16,
      color:"#f8f9fc",
      opacity:0.6,
      letterSpacing:2,
      fontFamily:"Nunito"
  },
  spacing:{
    flex:1,
    padding:20,
  },
  row : {
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  entryMount:{
    fontSize:24,
    color:"#f8f9fc",
    opacity:0.9,
    letterSpacing:2,
    fontFamily:"Nunito"
  },
  inputRow : {
    flex:2,
  }
})

  
export default style;