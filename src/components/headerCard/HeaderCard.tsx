import React, { FC, useContext,useCallback,memo,useEffect, useRef} from "react";
import { Text,  View } from "react-native";
import styles from "./style";
import accounting from "accounting";
import StateContext from "services/context";
import { GlobalState } from "interfaces/interfaces";
import CoinSet from "components/image/index";
import ResultText from "./../ResultText/ResultText"
const Result: FC = ({
    image,
    mount,
    text,
    symbol = "Bs ",
    children,
    input = false,
}) => {
    const State: GlobalState = useContext(StateContext);
    const { colors } = State;
  
   
    return (
        <View
            style={styles.container}
        >
            <CoinSet style={styles.icon} Title={image} />
            <View style={styles.description}>
                <Text style={[styles.Title, { color: colors?.font }]}>
                    {text}
                </Text>
                <ResultText symbol={symbol} input={input}/>
            </View>
        </View>
    );
};
export default memo(Result);
