import React, { FC, useContext, useCallback, memo, useEffect } from "react";
import { View, Text,TouchableHighlight } from "react-native";
import styles from "./style";
import { props, GlobalState } from "interfaces/interfaces";
import StateContext from "services/context";
import Icon from "react-native-vector-icons/AntDesign";
import accounting from "accounting";
import HeaderCard from "components/headerCard/HeaderCard";
const Result: FC<props> = () => {
     
    const {
        selectedDestiny,
        inverted,
        supportedCoins,
        originName,
        colors,
        setInverted
    } :GlobalState = useContext(StateContext);

    //condiciones cuando el origen es USD y cuando el Origen es USDBCV
    const getBsDs = useCallback(() => {
      if(originName ==="USD" && inverted){
            return "BS"
      }
      if(originName==="USD" && !inverted){
        return "BS"
      }
        return selectedDestiny ? "BS" : "USD";
    }, [selectedDestiny, inverted]);

    const getSupportedCoin = useCallback(() => {
        return (
            supportedCoins &&
            supportedCoins[originName ? originName : 0]["Title"]
        );
    }, [originName, inverted]);
   
    //retorna un component Header card no editable quiere decir que solo tiene una opcion de destino disponible
    
    const getResultImage = ()=>{
        return (originName ==="USDBCV") ?  (inverted)  ?  getBsDs()  :  getSupportedCoin() : inverted ? getSupportedCoin() : getBsDs()
    }
    const getInputImage = ()=>{
      return (originName ==="USDBCV") ?  (inverted)  ?  getSupportedCoin()  : getBsDs()  : inverted ? getBsDs() : getSupportedCoin();
    }
   

    return (
        <View style={styles.container}>
            <Text style={[styles.coinValue,{color: colors.font,}]}>
              
               1 {originName} =
                {accounting.formatMoney(
                    selectedDestiny
                        ? supportedCoins[originName]["BS"]
                        : supportedCoins[originName]["Mount"],
                    {
                        symbol: "",
                        thousand: ",",
                        decimal: ".",
                        precision: originName==="USD" || originName==="Bs" || originName==="USDBCV" ?  2  : 5,
                    }
                )} {selectedDestiny || originName==="USD" || originName==="USDBCV" ? "Bs" : " $" }
            </Text>
            <View style={[styles.CoinsContainer,{backgroundColor:colors.primary,}]}>
            
            <HeaderCard
                input={true}
                text={"Monto"}
                symbol={"$"}
                image={getInputImage()}
            ></HeaderCard>
            <View style={{width:"80%",flexWrap:"nowrap",flexDirection:"row", alignItems:"center" ,justifyContent:"flex-start"}}>
             
              <View style={{width:"90%",height:3, backgroundColor:colors.strong}}>
                <View style={{width:0,height:"100%",backgroundColor:""}}></View>
              </View>
            </View>            
            <HeaderCard
                text={"Al Cambio"}
                symbol={inverted ? " = $" : selectedDestiny ? " = Bs " : " = $ "}
                image={getResultImage()}
            ></HeaderCard>
            
            </View>
        </View>
    );
};
export default memo(Result);
