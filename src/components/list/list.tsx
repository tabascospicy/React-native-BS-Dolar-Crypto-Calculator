import React, { FC, useContext,Fragment } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import styles from "./style";

import { GlobalState } from "interfaces/interfaces";
import CoinCard from "./../coinCard/coinCard";
import StateContext from "./../../services/context";
const List: FC = () => {
    const State: GlobalState = useContext(StateContext);

    const { supportedCoins, Colors } = State;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView} >
                {supportedCoins &&
                    Object.keys(supportedCoins).map((element, i: number) => {
                        let value = supportedCoins[element];
                        return (
                            <Fragment key={i}>
                                <CoinCard
                                    name={element}
                                    keys={i}
                                    {...value}
                                />
                                <View
                          
                                    style={[
                                        styles.separator,
                                        { backgroundColor: Colors?.light },
                                    ]}
                                ></View>
                            </Fragment>
                        );
                    })}
            </ScrollView>
        </SafeAreaView>
    );
};
export default List;
