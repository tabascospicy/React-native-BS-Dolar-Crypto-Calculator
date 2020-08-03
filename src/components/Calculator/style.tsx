import { StyleSheet } from "react-native";
import Colors from "./../../themes/colors";
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
        borderRadius:20,
        shadowColor: Colors.secondary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      exchangeText:{
        fontWeight: "bold",
        letterSpacing:2,
        fontSize:20
      },
      containerInput:{
        flex:1,
        minWidth:100,
      },
      rotateIcon:{
        transform:[{rotateX:"100deg"}]
      },
      padd:{
        padding:10,
      }
})

export default styles;