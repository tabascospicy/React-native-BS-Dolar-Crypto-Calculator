import React, { useState } from "react";
import { View,UIManager,Platform } from "react-native";
import Home from "./src/view/Home/Home";
import Colors from "./src/themes/colors";
import { useFonts } from "expo-font";
import { GlobalState } from "./src/interfaces/interfaces";
import useAskCoins from "./src/Hooks/useAskCoins";
import StateProvider from "./src/services/context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import UpdatedCoins from "./src/components/PopOver/PopOver";
import LottieView from "lottie-react-native";
export default function App() {
    const [origin, setOrigin] = useState(0);
    const [destiny, setDestiny] = useState(" $");
    const [result, setResult] = useState<number>(0.0);
    const [selected, setSelected] = useState(false);
    const [colocarMonto, setColocarMonto] = useState(false);
    const {coins , lottie,dolarBS,notify, setNotify} = useAskCoins();

    let [fontLoaded] = useFonts({
        Nunito: require("./src/assets/fonts/Nunito/Nunito-Regular.ttf"),
    });
   


    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }

    const GlobalValues: GlobalState = {
        supportedCoins: coins,
        result,
        setResult,
        colocarMonto,
        setColocarMonto,
        destiny,
        selected,
        setSelected,
        setDestiny,
        origin,
        Colors,
        setOrigin,
        dolarBS
    };

    const completeFont = () => {
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <StateProvider.Provider value={{ ...GlobalValues }}>
                    <Home name="holi" />
                    <UpdatedCoins visible={notify} setVisible={setNotify} />
                </StateProvider.Provider>
            </ApplicationProvider>
        );
    };


    return (
        <View style={{ flex: 1, backgroundColor: Colors["primary"] }}>
            {lottie ? (
                <LottieView
                    source={require("./src/assets/lottie/loading.json")}
                    autoPlay
                    loop
                />
            ) : (
                completeFont()
            )}
        </View>
    );
}
