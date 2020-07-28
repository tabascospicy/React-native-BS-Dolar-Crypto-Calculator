import React, { useState,useRef } from "react";
import { View, UIManager, Platform } from "react-native";
import Home from "./src/view/Home/Home";
import ErrorMessage from "./src/components/ErrorMessage/ErrorMessage";
import Colors from "./src/themes/colors";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { GlobalState,CalculeValue } from "./src/interfaces/interfaces";
import useAskCoins from "./src/Hooks/useAskCoins";
import StateProvider from "./src/services/context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import UpdatedCoins from "./src/components/PopOver/PopOver";
export default function App() {
    const [origin, setOrigin] = useState(0);
    const [originName, setOriginName] = useState("USD");
    const [selectedDestiny, setSelectedDestiny] = useState(0);
    const { ResetCall ,  error, coins, lottie, notify, setNotify } = useAskCoins();
    const inverted = useRef(false);
    const [calculatedValues,setCalculatedValues] = useState<CalculeValue>({input:"0",result:"0"});

    if (Platform.OS === "android") {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    const GlobalValues: GlobalState = {
        supportedCoins: coins,
        origin,
        inverted,
        Colors,
        setOrigin,
        lottie,
        originName,
        setOriginName,
        calculatedValues,
        setCalculatedValues,
        selectedDestiny,
        setSelectedDestiny
    };
    
    return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <StateProvider.Provider value={{ ...GlobalValues }}>
                    <Home name="holi" />
                    {error && <ErrorMessage ResetCall={ResetCall} />}
                    <UpdatedCoins coins={coins} visible={notify} setVisible={setNotify} />
                </StateProvider.Provider>
            </ApplicationProvider>
        );
 

}
