import React, { FC, useContext, useState, useEffect } from "react";
import { Text, Animated, TouchableHighlight, Image, View } from "react-native";
import styles from "./style";
import { CoinType } from "interfaces/interfaces";
import accounting from "accounting";
import StateContext from "./../../services/context";
import { GlobalState } from "interfaces/interfaces";
const Result: FC<CoinType> = ({
    keys = 1,
    BS = "0,00",
    Title = "USD",
    name = "USD",
}) => {
    const State: GlobalState = useContext(StateContext);
    const { setOrigin, setSelected, Colors } = State;
    const handleTouch = (key: number) => {
        setOrigin && setOrigin(key);
        setSelected && setSelected(true);
    };

    const CoinSet = () => {
        switch (Title) {
            case "USD":
                return (
                    <Image
                        source={require("./../../assets/icons/dollar.png")}
                        style={styles.icon}
                    />
                );
                break;
            case "LTC":
                return (
                    <Image
                        source={require("./../../assets/icons/litecoin.png")}
                        style={styles.icon}
                    />
                );
                break;
            case "EUR":
                return (
                    <Image
                        source={require("./../../assets/icons/euro.png")}
                        style={styles.icon}
                    />
                );
                break;
            case "ETH":
                return (
                    <Image
                        source={require("./../../assets/icons/ethereum.png")}
                        style={styles.icon}
                    />
                );
                break;
            case "DASH":
                return (
                    <Image
                        source={require("./../../assets/icons/dashcoin.png")}
                        style={styles.icon}
                    />
                );
                break;
            case "BS":
                return (
                    <Image
                        source={require("./../../assets/icons/dollar.png")}
                        style={styles.icon}
                    />
                );
                break;
            case "BTC":
                return (
                    <Image
                        source={require("./../../assets/icons/bitcoin.png")}
                        style={styles.icon}
                    />
                );
                break;
            case "DOGE":
                return (
                    <Image
                        source={require("./../../assets/icons/dogecoin.png")}
                        style={styles.icon}
                    />
                );
                break;
            case "PTR":
                return (
                    <Image
                        source={require("./../../assets/icons/petro.png")}
                        style={styles.icon}
                    />
                );
                break;
            default:
                return (
                    <Image
                        source={require("./../../assets/icons/bs.png")}
                        style={styles.icon}
                    />
                );
                break;
        }
    };

    return ( !(Title=="Bs") && <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={Colors?.secondary}
            onPress={() => handleTouch(keys)}
            style={[styles.container, { backgroundColor: Colors?.primary }]}
        >
           <>
           {console.log(Title)}
                <CoinSet />
                <View style={styles.description}>
                    <Text style={[styles.FontTitle, { color: Colors?.light }]}>
                        {Title == "BS" ? "USD" : Title}
                    </Text>
                    <Text style={[styles.FontMount, { color: Colors?.light }]}>
                        {accounting.formatMoney(BS, {
                            symbol: "Bs ",
                            thousand: ".",
                            decimal: ",",
                        })}
                    </Text>
                </View>
          </>
        </TouchableHighlight>
    );
};
export default Result;
