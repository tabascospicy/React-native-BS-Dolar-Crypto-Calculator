import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flexDirection:"row",
    //  position:"absolute",
      padding:10,
      alignSelf:"flex-end",
  //    right:0,
      flexWrap: 'wrap',
   //   bottom:0,
      alignItems:"center"
    },
    icon:{
      padding:5,
      paddingTop:10,
    },
    selectDestiny:{
      flex:2,
      flexDirection:"row",
      margin:0,
      alignItems:"center",
      justifyContent:"center",
   //   maxHeight:120
  },
  padd:{
    margin:0,
    padding:10,
  }
})

export default styles;