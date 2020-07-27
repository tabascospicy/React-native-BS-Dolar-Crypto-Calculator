import React, { FC, useContext,useState} from "react";
import { Text,  View } from "react-native";
import styles from "./style";
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

    const isDecimalInput = () => {
      return mount.includes('.') ? mount : accounting.formatNumber(mount)
    }
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
                    {supportedCoins && input ?  isDecimalInput() :
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
