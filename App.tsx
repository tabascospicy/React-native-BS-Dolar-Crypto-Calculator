import React, { useEffect, useState } from "react";
import { View,UIManager,Platform } from "react-native";
import Home from "./src/view/Home/Home";
import Colors from "./src/themes/colors";
import { useFonts } from "expo-font";
import Cripto from "./src/services/Cripto";
import Petro from "./src/services/Petro";
import Dolar from "./src/services/Dolar";
import { Coins, GlobalState } from "./src/interfaces/interfaces";
import StateProvider from "./src/services/context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import UpdatedCoins from "./src/components/PopOver/PopOver";
import LottieView from "lottie-react-native";
export default function App() {
    const [coins, setCoins] = useState<Coins>();
    const [dolarBS, setDolarBS] = useState(0);
    const [origin, setOrigin] = useState(0);
    const [destiny, setDestiny] = useState(" $");
    const [result, setResult] = useState<number>(0.0);
    const [formated, setFormated] = useState(false);
    const [selected, setSelected] = useState(false);
    const [colocarMonto, setColocarMonto] = useState(false);
    const [notify, setNotify] = useState(false);
    const [lottie, setLottie] = useState(true);
    const [listo,setListo] = useState(false);
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
        setOrigin,
    };
    //comienza la carga de las monedas soportadas
    useEffect(() => {
        getCripto();
        const updateCoins = setInterval(() => {
            getCripto();
            getPetro();
        }, 50000);
        return clearInterval(updateCoins);
    }, []);
    useEffect(() => {
        setColocarMonto(true);
    }, [origin, destiny]);
    useEffect(() => {
        if (dolarBS && !formated) {
           
            let agregarBS: Coins = Object.keys(coins).reduce(
                (acum, element) => {
                    !coins[element]["BS"]
                        ? (acum[element] = {
                              BS: coins[element]["USD"] * dolarBS,
                              ...coins[element],
                          })
                        : (acum[element] = { ...coins[element] });
                    return acum;
                },
                {}
            );

            console.log("finally" , agregarBS)
            setCoins((prev) => agregarBS);
            setFormated(true);
            setNotify(true);
        }else if (formated){
          setLottie(false)
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
                setCoins((prev) => {
                    return { ...prev, ...ordered };
                }); 
                getDolar(ordered["BTC"]["USD"]);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const getDolar = async (btc) => {
        Dolar()
            .get("/ve/venezuela/transfers-with-specific-bank/.json")
            .then((response) => {
                let devider = 0;
                let prom = 0;
                for (let i = 0; i < response.data.data.ad_count; i++) {
                    if (response.data.data.ad_list[i].data.currency === "VES") {
                        prom += parseFloat(
                            response.data.data.ad_list[i].data.temp_price
                        );
                        devider++;
                    }
                }
                let promedio: string = (prom / devider).toFixed(2);

                let dolar = (+promedio / btc).toFixed(2);

                const addCoins: Coins = {
                    Bs: {
                        Title: "Bs",
                        Mount: promedio,
                        BS:parseFloat(promedio),
                        USD: parseFloat(promedio),
                    },
                    USD: { 
                      Title: "USD", 
                      Mount: dolar, 
                      BS: parseFloat(dolar) 
                    },
                };

                setCoins((prev) => {
                    return { ...prev, ...addCoins };
                });
                setDolarBS((prev) => parseFloat(dolar));
                console.log("dolar", dolar);
                getEuro(+promedio,dolar);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const getEuro = (bolivar,dolar) => {
        let prom = 0;
        Dolar()
            .get("/es/spain/.json")
            .then((response) => {
                let devider = 0;
                let prom = 0;
                for (let i = 0; i < response.data.data.ad_count; i++) {
                    if (response.data.data.ad_list[i].data.currency === "EUR") {
                        prom += parseFloat(
                            response.data.data.ad_list[i].data.temp_price
                        );
                        devider++;
                    }
                }
                prom = parseFloat((prom / devider).toFixed(2));
                let euro = parseFloat((bolivar / prom).toFixed(2));
                const addCoin: Coins = {
                    EUR: { Mount: prom,USD:parseFloat((euro/dolar).toFixed(4)), Title: "EUR", BS: euro },
                };
                setCoins((prev) => {
                    return { ...prev, ...addCoin };
                });
                getPetro();
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
                let addcoins: Coins = {
                    PTR: {
                        Mount: response.data.data["PTR"]["USD"],
                        Icon: "Icon",
                        Title: "PTR",
                        BS: response.data.data["PTR"]["BS"],
                    },
                };
                setCoins((prev) => {
                    return { ...prev, ...addcoins };
                });
                setFormated((prev) => false);
            })
            .catch((e) => {
                console.log(e);
            });
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
