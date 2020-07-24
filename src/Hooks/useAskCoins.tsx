import React , {useState,useEffect} from "react";
import Cripto from "./..//services/Cripto";
import Petro from "./..//services/Petro";
import Dolar from "./..//services/Dolar";
import { Coins, GlobalState } from "./../interfaces/interfaces";
const useAskCoins = () =>{
  const [coins, setCoins] = useState<Coins>();
  const [dolarBS, setDolarBS] = useState(0);
  const [formated, setFormated] = useState(false);
  const [notify, setNotify] = useState(false);
  const [lottie, setLottie] = useState(true);

  useEffect(() => {
    getCripto();
    const updateCoins = setInterval(() => {
        getCripto();
    }, 50000);
    return clearInterval(updateCoins);
}, []);


  useEffect(() => {
    if (dolarBS && !formated) {
       
        let agregarBS: Coins = coins && Object.keys(coins).reduce(
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
            const acum = {...ordered}
            getDolar(ordered["BTC"]["USD"],acum);
        })
        .catch((e) => {
            console.log(e);
        });
};
const getDolar = async (btc : number,acum : Coins) => {
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

            let acummulated = {...addCoins,...acum}
            setDolarBS((prev) => parseFloat(dolar));
            console.log("dolar", dolar);
            getEuro(+promedio,dolar,acummulated);
        })
        .catch((e) => {
            console.log(e);
        });
};
const getEuro = (bolivar : number,dolar : number,acum : Coins) => {
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
            let acummulated = {...addCoin,acum}
            getPetro(acummulated);
        })
        .catch((e) => {
            console.log(e);
        });
};
const getPetro = async (acum : Coins) => {
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
                return { ...prev, ...addcoins,acum };
            });
            setFormated((prev) => false);
        })
        .catch((e) => {
            console.log(e);
        });
};
  return {coins,lottie,notify,dolarBS};
}
export default useAskCoins;