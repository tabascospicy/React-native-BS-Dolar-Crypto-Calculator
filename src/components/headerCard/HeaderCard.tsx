import React, { FC, useContext,useCallback,memo} from "react";
import { Text,  View } from "react-native";
import styles from "./style";
import accounting from "accounting";
import StateContext from "services/context";
import { GlobalState } from "interfaces/interfaces";
import CoinSet from "components/image/index";
const Result: FC = ({
    image,
    mount,
    text,
    symbol = "Bs ",
    children,
    input = false,
}) => {
    const State: GlobalState = useContext(StateContext);
    const { Colors, supportedCoins , selectedDestiny, } = State;

    const isDecimalInput = useCallback(() => {
      return mount.includes('.') ? mount : accounting.formatNumber(mount)
    },[mount])

    
    return (
        <View
            style={[styles.container, { backgroundColor: Colors?.strong }]}
        >
            <CoinSet style={styles.icon} Title={image} />
            <View style={styles.description}>
                <Text style={[styles.Title, { color: Colors?.font }]}>
                    {text}
                </Text>
                <Text style={[styles.Mount, { color: Colors?.font }]}>
                    {supportedCoins && input ?  isDecimalInput() :
                        accounting.formatMoney(mount, {
                            symbol,
                            thousand: ",",
                            decimal: ".",
                            precision: selectedDestiny ? 2 : 5,
                        })}
                </Text>
            </View>
        </View>
    );
};
export default memo(Result);
