import React, { FC, useContext, useState, useEffect } from "react";
import { Text, Animated, TouchableHighlight, Image } from "react-native";
import styles from "./style";
import { CoinType } from "interfaces/interfaces";
import accounting from "accounting";
import StateContext from "./../../services/context";
import { GlobalState } from "interfaces/interfaces";
import Litecoin from "./../../assets/icons/dash.svg";
import Dash from "./../../assets/icons/dash.svg";
import Lite from "./../../assets/icons/litecoin.svg";
import Dodge from "./../../assets/icons/dogecoin.svg";
import Ether from "./../../assets/icons/eter.svg";
import Bitcoin from "./../../assets/icons/bitcoin.svg";
import Euro from "./../../assets/icons/euro.svg";
import Dolar from "./../../assets/icons/dolar.svg";
const Result: FC<CoinType> = ({
    keys = 1,
    BS = "0,00",
    Title = "USD",
    name = "USD",
}) => {
    const State: GlobalState = useContext(StateContext);
    const { setOrigin, setSelected } = State;
    const [appear] = useState(new Animated.Value(0));
    const handleTouch = (key: number) => {
        setOrigin && setOrigin(key);
        setSelected && setSelected(true);
    };

    useEffect(() => {
        Animated.timing(appear, {
            toValue: 1,
            useNativeDriver: true,
            duration: 800,
        }).start();
    }, []);

    const CoinSet = () => {
        switch (Title) {
            case "USD":
                return <Dolar style={styles.icon} width={20} height={20} />;
                break;
            case "LTC":
                return <Lite style={styles.icon} width={20} height={20} />;
                break;
            case "EUR":
                return <Euro style={styles.icon} width={20} height={20} />;
                break;
            case "ETH":
                return <Ether style={styles.icon} width={20} height={20} />;
                break;
            case "DASH":
                return <Dash style={styles.icon} width={20} height={20} />;
                break;
            case "Bs":
                return <Dolar style={styles.icon} width={20} height={20} />;
                break;
            case "BTC":
                return <Bitcoin style={styles.icon} width={20} height={20} />;
                break;
            case "DOGE":
                return <Dodge style={styles.icon} width={20} height={20} />;
                break;
            case "PTR":
                return <Dolar style={styles.icon} width={20} height={20} />;
                break;
            default:
                return <Dolar style={styles.icon} width={20} height={20} />;
                break;
        }
    };

    return (
        <TouchableHighlight
            activeOpacity={0.6}
            onPress={() => handleTouch(keys)}
            style={styles.container}
        >
            <Animated.View style={{ opacity: appear,width:"100%" }}>
                <CoinSet />

                <Text style={styles.FontTitle}>
                    {Title == "BS" ? "USD" : Title}
                </Text>
                <Text style={styles.FontMount}>
                    {accounting.formatMoney(BS, {
                        symbol: "Bs ",
                        thousand: ".",
                        decimal: ",",
                    })}
                </Text>
            </Animated.View>
        </TouchableHighlight>
    );
};
export default Result;
