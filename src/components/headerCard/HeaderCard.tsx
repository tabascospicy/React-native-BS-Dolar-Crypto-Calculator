import React, { FC, useContext } from "react";
import { Text, Image, View } from "react-native";
import styles from "./style";
import { CoinType } from "interfaces/interfaces";
import accounting from "accounting";
import StateContext from "./../../services/context";
import { GlobalState } from "interfaces/interfaces";
import CoinSet from "./../image/index";
const Result: FC = ({
    image,
    mount,
    text,
    symbol = "Bs ",
    children,
    input = false,
}) => {
    const State: GlobalState = useContext(StateContext);
    const { Colors, supportedCoins } = State;
    const general = {
        symbol: symbol,
        thousand: ",",
        decimal: ".",
        precision: 5,
    };

    return (
        <View
            style={[styles.container, { backgroundColor: Colors?.secondary }]}
        >
            <CoinSet style={styles.icon} Title={image} />
            <View style={styles.description}>
                <Text style={[styles.Title, { color: Colors?.light }]}>
                    {text}
                </Text>
                <Text style={[styles.Mount, { color: Colors?.light }]}>
                    {supportedCoins && input ?  symbol  + mount :
                        accounting.formatMoney(mount, {
                            symbol,
                            thousand: ",",
                            decimal: ".",
                            precision: 5,
                        })}
                </Text>
            </View>
        </View>
    );
};
export default Result;
