import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexWrap:"wrap",
      flexDirection:"column",
    },
    buttonsRow:{
      flex:2,
      flexDirection:"row",
    },
    exchangeButton:{
      justifyContent:"center",
      alignItems:"center",
      flex:1
    },
    numbers:{
      flex:5,
      flexDirection:"row",
      justifyContent:"center",
      flexWrap:"wrap",
      maxHeight:60,
    },
    actions:{
      flexDirection:"row",
      flex:1,
      },
      number:{
        flex:1,
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:25,
      },
      selectDestiny:{
          flex:1,
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center",
       //   maxHeight:120
      },
      exchange:{
        flex:1,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        maxHeight:50,
        borderRadius:20
      },
      exchangeText:{
        fontWeight: "bold",
        letterSpacing:2,
      },
      containerInput:{
        flex:1,
        minWidth:100,
      },
})

export default styles;