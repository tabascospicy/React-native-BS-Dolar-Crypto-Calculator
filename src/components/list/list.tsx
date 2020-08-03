import React, { FC, useContext,Fragment , useRef} from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import styles from "./style";

import { GlobalState } from "interfaces/interfaces";
import CoinCard from "./../coinCard/coinCard";
import StateContext from "./../../services/context";
const List: FC = (props) => {
    const State: GlobalState = useContext(StateContext);

    const { supportedCoins, Colors } = State;
    //colocar USD BCV y USD AFtim
    const list = useRef(["USD" ,"USDBCV", "Bs" , "BTC" ,"ETH", "DOGE",  "DASH" , "EUR" , "LTC" , "PTR"]);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView} >
                { list.current.map((element, i: number) => {
                        let value = supportedCoins ? supportedCoins[element] : {Mount:"0.00" , BS:"0", USD:"0",name:"USD" };
                        return (
                            <Fragment key={i}>
                                <CoinCard
                                    name={element}
                                    keys={i}
                                    Title={element}
                                    {...value}
                                    {...props}
                                />
                                <View
                          
                                    style={[
                                        styles.separator,
                                        { backgroundColor: Colors?.strong },
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
