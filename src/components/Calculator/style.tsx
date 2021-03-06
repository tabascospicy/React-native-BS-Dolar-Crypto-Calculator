import { StyleSheet } from "react-native";
import Colors from "./../../themes/colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:"column",
    },
    buttonsRow:{
      flex:1,
  //    maxHeight:hp("30%"),
  //    alignItems:"center",
 //     justifyContent:"center",
      flexDirection:"row",
      flexWrap:"wrap",
    //  width:"100%",
    },
    buttonActionsColumn:{
      flex:1,
      maxWidth:wp("15%"),
      flexDirection:"column",
    },

    buttonActions:{
      flex:1
    },
    containerInput:{
      flex:1,
      minWidth:wp('26%'),
      height:hp('10%'),
     // width: wp('78%'),
    },
    iconButtons:{
      flex:1
    },
    exchangeButton:{
      justifyContent:"center",
      alignItems:"center",
      flex:1
    },
    numbers:{
      flex:1,
      flexDirection:"row",
     // justifyContent:"center",
      flexWrap:"wrap",
      //maxHeight:80,
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
          flex:2,
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
        height:50,
        padding:27,
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
      rotateIcon:{
        transform:[{rotateX:"100deg"}]
      },
      padd:{
        padding:10,
      },
      retweet:{
        transform:[{rotate:"100deg"}]
      },
      bottomRow:{
        //flex:1,
        marginTop:"auto",
        alignSelf:"flex-end",
        flexWrap:"wrap",
         flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
      },
      rotate:{
        flex:1,
        maxWidth:40,
        marginHorizontal:20,
        padding:10,borderRadius:10, 
      },
      borderI:{
        borderBottomWidth:0.2,
        borderRightWidth:0.2,
      },
      borderT:{
        borderBottomWidth:0.2,
      }
})

export default styles;