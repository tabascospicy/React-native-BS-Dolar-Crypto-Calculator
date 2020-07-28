import  { useState, useEffect,useRef } from "react";
import Cripto from "./..//services/Cripto";
import Petro from "./..//services/Petro";
import Dolar from "./..//services/Dolar";
import { Coins } from "./../interfaces/interfaces";

const useAskCoins = () => {
    const [coins, setCoins] = useState<Coins>();
    const [dolarBS] = useState(0);
    const formated = useRef(false);
    const [notify, setNotify] = useState(false);
    const lottie = useRef(false);
    const [error,setError] = useState(false)
    const ResetCall = () =>{
      lottie.current = false;
      setError(false);
      getCripto();
    }
    useEffect(() => {
        getCripto();
        const updateCoins = setInterval(() => {
            getCripto();
        }, 60000);
        return  ()=>clearInterval(updateCoins);
    }, []);

    const formatCoins = (Coins: Coins ) => {
        let agregarBS: Coins =
            Coins &&
            Object.keys(Coins).reduce((acum, element) => {
                !Coins[element]["BS"]
                    ? (acum[element] = {
                          BS: Coins[element]["USD"] * Coins["USD"]["BS"],
                          ...Coins[element],
                      })
                    : (acum[element] = { ...Coins[element] });
                return acum;
            }, {});
        formated.current = true; 
        lottie.current = true;
        setCoins((prev) => agregarBS);
    };

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
                const acum = { ...ordered };
                getDolar(ordered["BTC"]["USD"], acum);
            })
            .catch((e) => {
                setError(true);
                console.log(e);
            });
    };
    const getDolar = async (btc: number, acum: Coins) => {
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
                        BS: parseFloat(promedio),
                        USD: parseFloat(promedio),
                    },
                    USD: {
                        Title: "USD",
                        Mount: dolar,
                        BS: parseFloat(dolar),
                    },
                };

                let acummulated = { ...addCoins, ...acum };
                getEuro(+promedio, parseFloat(dolar), acummulated);
            })
            .catch((e) => {
                setError(true);
                console.log(e);
            });
    };
    const getEuro = (bolivar: number, dolar: number, acum: Coins) => {
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
                    EUR: {
                        Mount: parseFloat((euro / dolar).toFixed(4)) ,
                        USD: parseFloat((euro / dolar).toFixed(4)),
                        Title: "EUR",
                        BS: euro,
                    },
                };
                let acummulated = { ...addCoin, ...acum };
                getPetro(acummulated);
            })
            .catch((e) => {
                setError(true);
                console.log(e);
            });
    };
    const getPetro = async (acum: Coins) => {
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
                        USD:response.data.data["PTR"]["USD"],
                        BS: response.data.data["PTR"]["BS"],
                    },
                };
                formatCoins({ ...addcoins, ...acum });
            })
            .catch((e) => {
                setError(true);
                console.log(e);
            });
    };
    return {ResetCall,error, coins:coins, lottie, notify, dolarBS, setNotify };
};
export default useAskCoins;
