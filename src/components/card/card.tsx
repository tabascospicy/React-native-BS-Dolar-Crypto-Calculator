import React, { FC, useState, useContext, useEffect } from "react";
import {
    Animated,
    Image,
    LayoutAnimation,
} from "react-native";
import styles from "./style";
import { props, GlobalState, CoinType } from "interfaces/interfaces";
import StateContext from "./../../services/context";

import Calculator from "./../Calculator/Calculator";
const Card: FC<props> = ({ Toggle }) => {
    const [selectedDestiny, setSelectedDestiny] = useState(0);
    //    let inputs : number = 0;
    const [arrived, setArrived] = useState(false);
    const State: GlobalState = useContext(StateContext);
    const {
        Colors,
        setResult,
        supportedCoins,
        origin,
        destiny,
        setDestiny,
    } = State;
    const [selectedOrigin, setSelectedOrigin] = useState(
        supportedCoins && supportedCoins["USD"]
    );
    useEffect(() => {
        const animation = requestAnimationFrame(() => {
            LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
            );
            setArrived(!arrived);
        });

        /*const selectedName =
            supportedCoins && Object.keys(supportedCoins)[origin];
            supportedCoins && setSelectedOrigin(supportedCoins[selectedName]);*/
        return () => cancelAnimationFrame(animation);
    }, []);

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    backgroundColor: Colors?.white,
                    height: arrived ? "50%" : "2%",
                    minHeight: arrived ? 300 : 0,
                },
            ]}
        >
          <Calculator />
        </Animated.View>
            
    );
};

const CoinSet = (Title: CoinType) => {
    switch (Title["Title"]) {
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
                    source={require("./../../assets/icons/petro.png")}
                    style={styles.icon}
                />
            );
            break;
    }
};

export default Card;
