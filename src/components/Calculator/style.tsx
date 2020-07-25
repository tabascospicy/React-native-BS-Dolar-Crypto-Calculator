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
      flex:2,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      flexWrap:"wrap"
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
      }
})

export default styles;