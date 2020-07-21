import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container:{
    width:"41%",
    position:"relative",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#212e4e",
    margin:5,
    paddingLeft:18,
    paddingRight:5,
    paddingTop:8,
    borderRadius:5,
    paddingBottom:8,
    flexWrap:"nowrap",
  },
  FontMount:{
      fontSize:14,
      letterSpacing:1,
      alignSelf:"flex-end",
      color:"#f8f9fc",
      opacity:1,
      fontWeight:"bold",
     // fontFamily:"Nunito"
  },
  FontTitle:{
      fontSize:12,
      alignSelf:"flex-end",
      letterSpacing:2,
      color:"#f8f9fc",
      opacity:0.6,
  //    fontFamily:"Nunito"
  },
  icon:{
    position:"absolute",
    top:0,
    left:0,
    
  }
})

  
export default style;