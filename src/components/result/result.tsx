import React, { FC, useContext, useEffect, useCallback,memo } from "react";
import { View } from "react-native";
import styles from "./style";
import { props, GlobalState } from "interfaces/interfaces";
import StateContext from "./../../services/context";
import Colors from "./../../themes/colors";
import HeaderCard from "./../headerCard/HeaderCard";
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
    }, [selectedDestiny,inverted]);

    const getSupportedCoin = useCallback(() => {
        return supportedCoins && supportedCoins[originName ? originName : 0]["Title"];
    }, [originName,inverted]);

    

    //retorna un component Header card no editable quiere decir que solo tiene una opcion de destino disponible
    const WasDolarSelected = () => {
        return supportedCoins &&
            originName === "USD" ? (
            <HeaderCard
                text={"Resultado"}
                symbol={"Bs "}
                image={"BS"}
                mount={calculatedValues.result ? calculatedValues.result : ""}
            ></HeaderCard>
        ) : (
            <HeaderCard
                text={"Resultado"}
                symbol={selectedDestiny ? "Bs " : "$ "}
                image={inverted ? getSupportedCoin() : getBsDs()}
                mount={calculatedValues.result ? calculatedValues.result : ""}
            ></HeaderCard>
        );
    };

    return (
        <View style={styles.container}>
            <WasDolarSelected />
            <HeaderCard
                input={true}
                text={"Ingresado"}
                symbol={"$"}
                image={inverted ? getBsDs() : getSupportedCoin()}
                mount={calculatedValues.input ? calculatedValues.input : ""}
            ></HeaderCard>
        </View>
    );
};
export default memo(Result);
