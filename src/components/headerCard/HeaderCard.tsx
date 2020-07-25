import React, { FC, useContext } from "react";
import { Text, Image, View } from "react-native";
import styles from "./style";
import { CoinType } from "interfaces/interfaces";
import accounting from "accounting";
import StateContext from "./../../services/context";
import { GlobalState } from "interfaces/interfaces";

const Result: FC<CoinType> = () => {
    const State: GlobalState = useContext(StateContext);
    const { Colors ,supportedCoins } = State;

    return (
        <View
            style={[styles.container, { backgroundColor: Colors?.secondary }]}
        >
            <Image
                source={require("./../../assets/icons/dollar.png")}
                style={styles.icon}
            />
            <View style={styles.description}>
                <Text style={[styles.Title, { color: Colors?.light }]}>
                      1 USD : 
                </Text>
            <Text style={[styles.Mount, { color: Colors?.light }]}>
                   {supportedCoins && accounting.formatMoney(supportedCoins["USD"]["BS"] , {
                        symbol: "Bs ",
                        thousand: ".",
                        decimal: ",",
                    })}
                </Text>
            </View>
        </View>
    );
};
export default Result;
