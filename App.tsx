import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/view/Home/Home";
import Colors from "./src/themes/colors";
import * as Font from "expo-font";
import Cripto from "./src/services/Cripto";
import Dolar from "./src/services/Dolar";
import Petro from "./src/services/Petro";
import StateProvider from "./src/services/context";
const fetchFonts = () => {
    return Font.loadAsync({
        Nunito: require("./src/assets/fonts/Nunito/Nunito-Regular.ttf"),
    });
};
export default function App() {
    const [font, loadedFont] = useState(true);
    const [coins, setCoins] = useState([]);
    const [selectedCoin,setSelectedCoin] = useState({});
    const [result,setResult] = useState("0.00");
  //carga las fuentes necesarias
    useEffect(() => {
        fetchFonts().then(() => {
            loadedFont(false);
        });
    }, []);

    //comienza la carga de las monedas soportadas
    useEffect(() => {
        getCripto();
        getPetro();
    }, []);

    const getCripto = async () => {
        Cripto()
            .get("/pricemulti?fsyms=BTC,ETH,DASH,DOGE,LTC&tsyms=USD")
            .then((response) => {
                console.log(response.data, "cripto");
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
                console.log(response.data.data, "petro");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <View style={{ flex: 1, backgroundColor: Colors["primary"] }}>
          <StateProvider.Provider  value={{coins,setSelectedCoin,result,setResult}}>
            {font ? <Text>Cargando</Text> : <Home name="holi" />}
          </StateProvider.Provider>
        </View>
    );
}
