import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Home from "./src/view/Home/Home";
import Colors from "./src/themes/colors";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import Cripto from "./src/services/Cripto";
import Petro from "./src/services/Petro";
import { CoinType, Coins } from "./src/interfaces/interfaces";
import StateProvider from "./src/services/context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
export default function App() {
    const [coins, setCoins] = useState<Coins>();
    const [dolarBS, setDolarBS] = useState(0);
    const [origin,setOrigin] = useState(0);
    const [destiny,setDestiny] = useState(0);
    const [result, setResult] = useState<number>(0.0);
    const [formated, setFormated] = useState(false);
    const [selected,setSelected] = useState(false);
    const [colocarMonto,setColocarMonto] = useState(false);
      let [fontLoaded] = useFonts({
        Nunito: require("./src/assets/fonts/Nunito/Nunito-Regular.ttf"),
    });

    //comienza la carga de las monedas soportadas
    useEffect(() => {
        getCripto();
        getPetro();
    }, []);
    useEffect(()=>{
        setColocarMonto(true)
    },[origin,destiny])
    useEffect(() => {
        console.log("pasa");
        if (dolarBS && !formated) {
            let agregarBS : Coins = Object.keys(coins).reduce((acum, element) => {
                !coins[element]["BS"]
                    ? (acum[element] = {
                          BS: coins[element]["USD"] * dolarBS,
                          ...coins[element],
                      })
                    : (acum[element] = { ...coins[element] });
                return acum;
            }, {});
            console.log(agregarBS, "finally");
            setCoins((prev) => agregarBS);
            setFormated(true);
        }
    }, [coins]);

    const getCripto = async () => {
        Cripto()
            .get("/pricemulti?fsyms=BTC,ETH,DASH,DOGE,LTC&tsyms=USD")
            .then((response) => {
                const ordered = Object.keys(response.data).reduce(
                    (acum, element) => {
                        let pushcoin = response.data[element];
                        acum[element] = {
                            ...pushcoin,
                            Title: element,
                            icon: "Icon",
                            Mount: response.data[element].USD,
                        };
                        return acum;
                    },
                    {}
                );
                setFormated((prev) => false);
                setCoins((prev) => {
                    return { ...prev, ...ordered };
                });
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const getPetro = async () => {
        let data = {
            coins: ["USD", "PTR", "EUR"],
            fiats: ["BS", "USD", "EUR"],
        };
        Petro()
            .post("/price/", data)
            .then((response) => {
                //    console.log(response.data.data)
                let addcoins :Coins = {
                    EUR: {
                        Mount: response.data.data["EUR"]["USD"],
                        Icon: "Icon",
                        Title: "EUR",
                        BS: response.data.data["EUR"]["BS"],
                    },
                    PTR: {
                        Mount: response.data.data["PTR"]["USD"],
                        Icon: "Icon",
                        Title: "PTR",
                        BS: response.data.data["PTR"]["BS"],
                    },
                    Bs: {
                        USD: response.data.data["EUR"]["USD"],
                        Mount:
                            response.data.data["EUR"]["BS"] /
                            response.data.data["EUR"]["USD"],
                        Icon: "Icon",
                        Title: "BS",
                    },
                };
                setDolarBS(
                    (prev) =>
                        response.data.data["EUR"]["BS"] /
                        response.data.data["EUR"]["USD"]
                );
                setCoins((prev) => {
                    return { ...prev, ...addcoins };
                });
                //    console.log(coins,"petro")
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const completeFont = () => {
        return<ApplicationProvider {...eva} theme={eva.dark}>
            <View style={{ flex: 1, backgroundColor: Colors["primary"] }}>
                <StateProvider.Provider
                    value={{
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
                        setOrigin
                    }}
                >
                    <Home name="holi" />
                </StateProvider.Provider>
            </View>
        </ApplicationProvider>;
    };
    return !fontLoaded ? <AppLoading /> : completeFont();
}
