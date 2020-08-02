import React, { useState } from "react";
import { UIManager, Platform,View } from "react-native";
import Home from "./src/view/Home/Home";
import ErrorMessage from "./src/components/ErrorMessage/ErrorMessage";
import { GlobalState, CalculeValue } from "./src/interfaces/interfaces";
import useAskCoins from "./src/Hooks/useAskCoins";
import Colors from "./src/themes/colors";
import StateProvider from "./src/services/context";
export default function App() {
    const [origin, setOrigin] = useState(0);
    const [originName, setOriginName] = useState("USD");
    const [selectedDestiny, setSelectedDestiny] = useState(0);
    const {
        ResetCall,
        error,
        coins,
        lottie,
        notify,
        setNotify,
    } = useAskCoins();
    const [inverted, setInverted] = useState(false);
    const [calculatedValues, setCalculatedValues] = useState<CalculeValue>({
        input: "0",
        result: "0",
    });

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
        setInverted,
        calculatedValues,
        setCalculatedValues,
        selectedDestiny,
        setSelectedDestiny,
    };

    return (
      <View style={{flex:1,backgroundColor:Colors.strong}}>
            
           
                <StateProvider.Provider value={{ ...GlobalValues }}>
                    <Home name="holi" />
                    {error && <ErrorMessage ResetCall={ResetCall} />}
                </StateProvider.Provider>
        </View>
    );
}
