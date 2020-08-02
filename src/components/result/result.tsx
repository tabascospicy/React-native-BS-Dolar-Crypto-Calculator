import React, { FC, useContext, useCallback, memo } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { props, GlobalState } from "interfaces/interfaces";
import StateContext from "services/context";
import Colors from "themes/colors";
import { AntDesign } from '@expo/vector-icons'; 
import accounting from "accounting";
import HeaderCard from "components/headerCard/HeaderCard";
const Result: FC<props> = ({ name }) => {
    const State: GlobalState = useContext(StateContext);
    const {
        selectedDestiny,
        inverted,
        calculatedValues,
        supportedCoins,
        originName,
    } = State;

    const getBsDs = useCallback(() => {
        return selectedDestiny ? "BS" : "USD";
    }, [selectedDestiny, inverted]);

    const getSupportedCoin = useCallback(() => {
        return (
            supportedCoins &&
            supportedCoins[originName ? originName : 0]["Title"]
        );
    }, [originName, inverted]);

    //retorna un component Header card no editable quiere decir que solo tiene una opcion de destino disponible
    const WasDolarSelected = () => {
        return supportedCoins && originName === "USD" ? (
            <HeaderCard
                text={"Al Cambio"}
                symbol={"Bs "}
                image={"BS"}
                mount={calculatedValues.result ? calculatedValues.result : ""}
            ></HeaderCard>
        ) : (
            <HeaderCard
                text={"Al Cambio"}
                symbol={selectedDestiny ? "Bs " : "$ "}
                image={inverted ? getSupportedCoin() : getBsDs()}
                mount={calculatedValues.result ? calculatedValues.result : ""}
            ></HeaderCard>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.coinValue}>
              
                {originName} =
                {accounting.formatMoney(
                    selectedDestiny
                        ? supportedCoins[originName]["BS"]
                        : supportedCoins[originName]["Mount"],
                    {
                        symbol: selectedDestiny ? "Bs " : "$ ",
                        thousand: ",",
                        decimal: ".",
                        precision:selectedDestiny ? 0 : 5,
                    }
                )}
            </Text>
            <WasDolarSelected />
            <HeaderCard
                input={true}
                text={"Monto"}
                symbol={"$"}
                image={inverted ? getBsDs() : getSupportedCoin()}
                mount={calculatedValues.input ? calculatedValues.input : ""}
            ></HeaderCard>
        </View>
    );
};
export default memo(Result);
