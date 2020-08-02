import React, { FC } from "react";
import {  View, TouchableHighlight ,Text} from "react-native";
import styles from "./style";
import Colors from "themes/colors";
const ErrorMessage: FC = ({ResetCall}) => {

    return (
        <View
            style={[styles.container, { backgroundColor: Colors?.primary }]}
        >
            <View style={{backgroundColor:Colors.secondary,padding:20,alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
           <Text style={[styles.Title,{color:Colors.light}]}>
              Parece haber problemas de conexion, Checkee su conexion e intente de nuevo
           </Text>
           <TouchableHighlight style={[styles.button,{backgroundColor:Colors.secondary}]} onPress={ResetCall} >
             <Text style={[styles.buttonText,{color:Colors.light}]}>Intentar Nuevamente</Text>
           </TouchableHighlight>
           </View>
        </View>
    );
};
export default ErrorMessage;