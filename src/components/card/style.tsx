import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container:{
    flex:1,
    width:"90%",
    borderRadius:10,
    maxHeight:500,
    backgroundColor:"#212e4e"
  },
  titleFont:{
      fontSize:16,
      color:"#f8f9fc",
      opacity:0.6,
     // alignSelf:"flex-start",
      flexWrap:"wrap",
      width:"40%",
      textAlign:"center",
      letterSpacing:2,
     // fontFamily:"Nunito"
  },
  select:{
    maxWidth:120,
    flex:1,
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
 //   fontFamily:"Nunito"
  },
  inputRow : {
    flex:2,
  },
  inputMount :{
    width:"100%",
    borderColor:"#15c0ac",
    color:"#fff",
    borderBottomWidth:1,
    padding : 1,
    opacity:0.7,
    borderRadius:20
  }
})

  
export default style;