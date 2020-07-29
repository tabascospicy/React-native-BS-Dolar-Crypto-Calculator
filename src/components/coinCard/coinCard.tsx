import React, { FC, useContext, Fragment, memo , useRef, useEffect } from "react";
import { Text, Animated, TouchableHighlight, Image, View } from "react-native";
import styles from "./style";
import { CoinType } from "interfaces/interfaces";
import accounting from "accounting";
import StateContext from "./../../services/context";
import { GlobalState } from "interfaces/interfaces";
import Images from "./../image/index";
import LoadingCard from "./../loadingCard/loadingCard";
const Result: FC<CoinType> = ({
    keys = 1,
    BS = "0,00",
    USD = "0.00",
    Title = "USD",
    name = "USD",
    ...props
}) => {
    const State: GlobalState = useContext(StateContext);
    const { setOrigin, Colors, setOriginName, lottie } = State;
    const handleTouch = (key: number, name: string) => {
         setOrigin && setOrigin(key);
        setOriginName && setOriginName(name);
        props.navigation.navigate("Calculator");
    };

    
    return (
        !(Title === "Bs") && (
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor={Colors?.secondary}
                disabled={!lottie.current}
                onPress={() =>handleTouch(keys, Title)}
                style={[styles.container, { backgroundColor: Colors?.primary }]}
            >
              <Fragment>
                
                {lottie.current ? (
                    <Fragment>
                        <Images Title={Title} style={styles.icon} />
                        <View style={styles.description}>
                            <Text style={[ styles.FontTitle, { color: Colors?.light }, ]}>
                                {Title == "BS" ? "USD" : Title}
                            </Text>
                            {Title !== "USD" ? (
                                <Text
                                    style={[
                                        styles.FontMount,
                                        { color: Colors?.light },
                                    ]}
                                >
                                    USD :
                                    {accounting.formatMoney(BS, {
                                        symbol: "$ ",
                                        thousand: ".",
                                        decimal: ",",
                                        precision: 4,
                                    })}
                                </Text>
                            ) : (
                                <Text style={styles.FontMount}>USD : $1</Text>
                            )}
                        </View>
                    </Fragment>
                ) : (
                    <LoadingCard ><Images Title={Title} style={[styles.icon,styles.iconLoad]} /></LoadingCard>
                )}</Fragment>
            </TouchableHighlight>
        )
    );
};
export default memo(Result);
