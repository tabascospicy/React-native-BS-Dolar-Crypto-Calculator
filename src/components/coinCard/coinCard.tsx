import React, { FC, useContext, useState, useEffect } from "react";
import { Text, Animated, TouchableHighlight,Image } from "react-native";
import styles from "./style";
import { CoinType } from "interfaces/interfaces";
import accounting from "accounting";
import StateContext from "./../../services/context";
import { GlobalState } from "interfaces/interfaces";

const Result: FC<CoinType> = ({
    keys = 1,
    BS = "0,00",
    Title = "Dolar",
    Icon = "Icon",
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

    return (
      
            <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => handleTouch(keys)}
                style={styles.container}
            >
                <Animated.View style={{ opacity: appear }}>
                    <Text style={styles.icon}> {Icon}</Text>
                    <Text style={styles.FontTitle}> {Title =="BS" ?"USD"  : Title }</Text>
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
