import React, { FC, useContext, Fragment, memo , useEffect } from "react";
import { Text, TouchableHighlight,  View } from "react-native";
import styles from "./style";
import { CoinType } from "interfaces/interfaces";
import accounting from "accounting";
import StateContext from "services/context";
import { GlobalState } from "interfaces/interfaces";
import Images from "components/image/index";
import LoadingCard from "components/loadingCard/loadingCard";
import { useTheme } from '@react-navigation/native';
const Result: FC<CoinType> = ({
    keys = 1,
    BS = "0,00",
    USD = "0.00",
    Title = "USD",
    name = "USD",
    ...props
}) => {
    const { setOrigin, colors, setOriginName, lottie } : GlobalState = useContext(StateContext);
    const handleTouch = (key: number, name: string) => {
         setOrigin && setOrigin(key);
        setOriginName && setOriginName(name);
        props.navigation.navigate("Calculator");
    };

    return (
        !(Title === "Bs") && (
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor={colors.strong}
                disabled={!lottie}
                onPress={() =>handleTouch(keys, Title)}
                style={[styles.container, { backgroundColor: colors.primary }]}
            >
              <Fragment>
                {lottie ? (
                    <Fragment>
                        <Images Title={Title} style={styles.icon} />
                        <View style={styles.description}>
                            <Text style={[ styles.FontTitle, { color: colors.font }, ]}>
                                {Title == "USD" ? "Dolar libre" : Title== "USDBCV" ? "Dolar Oficial (BCV)" : Title}
                            </Text>
                            {Title !== "USD" && Title !== "USDBCV"  ? (
                                <Text
                                    style={[
                                        styles.FontMount,
                                        { color: colors.font },
                                    ]}
                                >
                                    USD :
                                    {accounting.formatMoney(USD, {
                                        symbol: "",
                                        thousand: ".",
                                        decimal: ",",
                                        precision: 4,
                                    })}
                                </Text>
                            ) : (
                            <Text style={[styles.FontMount, { color: colors.font }]}>Bs : 
                            {accounting.formatMoney(BS, {
                                        symbol: "",
                                        thousand: ".",
                                        decimal: ",",
                                        precision: 2,
                                    })}
                            </Text>
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
