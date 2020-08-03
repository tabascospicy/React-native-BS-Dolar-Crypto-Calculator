import { useState, useEffect, useRef } from "react";
import Cripto from "services/Cripto";
import Petro from "services/Petro";
import Dolar from "services/Dolar";
import { Coins } from "interfaces/interfaces";

const useAskCoins = () => {
  const [coins, setCoins] = useState<Coins>();
  const [dolarBS] = useState(0);
  const formated = useRef(false);
  const arrived = useRef(0);
  const promedioBs = useRef('0');
  const savedCoins = useRef({});
  const promEuro = useRef(0);
  const [notify, setNotify] = useState(false);
  const [lottie,setLottie] = useState(false);
  const [error, setError] = useState(false);
  const ResetCall = () => {
    setLottie(false);
    setError(false);
    getCripto();
  };

  useEffect(() => {
   
    if (arrived.current ==4) {
      setLottie(true);
      arrived.current = 0; 
      //console.log(setLottie(true))
    }
  }, [coins]);

  useEffect(() => {
    getCripto();
    getDolar();
    getPetro();
    getEuro();
    const updateCoins = setInterval(() => {
      getCripto();
      getDolar();
      getPetro();
      getEuro();
    }, 60000);
    return () => clearInterval(updateCoins);
  }, []);

  const formatCoins = (Coins: Coins) => {
    let agregarBS: Coins =
      Coins &&
      Object.keys(Coins).reduce((acum, element) => {
        !Coins[element]['BS']
          ? (acum[element] = {
              BS: Coins[element]['USD'] * Coins['USD']['BS'],
              ...Coins[element],
            })
          : (acum[element] = {...Coins[element]});
        return acum;
      }, {});
    formated.current = true;
    setCoins((prev) => agregarBS);
  };
  const addValues = () => {
    let dolar = parseFloat(
      (+promedioBs.current / savedCoins.current['BTC']['USD']).toFixed(2),
    );
    let euro = parseFloat((+promedioBs.current / promEuro.current).toFixed(2));
    savedCoins.current = {
      ...savedCoins.current,
      Bs: {
        Mount: promedioBs.current,
        BS: parseFloat(promedioBs.current),
        USD: parseFloat(promedioBs.current),
        Title: 'Bs',
      },
    };
    savedCoins.current = {
      ...savedCoins.current,
      USD: {
        Title: 'USD',
        Mount: dolar,
        BS: dolar,
      },
    };
    savedCoins.current = {
      ...savedCoins.current,
      EUR: {
        Mount: parseFloat((euro / dolar).toFixed(4)),
        USD: parseFloat((euro / dolar).toFixed(4)),
        Title: 'EUR',
        BS: euro,
      },
    };
  };
  const checkCallStatus = (value) => {
    arrived.current = ++arrived.current;
    savedCoins.current = {...savedCoins.current, ...value};
    if (arrived.current >= 4) {
      addValues();
      formatCoins(savedCoins.current);
    }
  };
  const getCripto = async () => {
    Cripto()
      .get('/pricemulti?fsyms=BTC,ETH,DASH,DOGE,LTC&tsyms=USD')
      .then((response) => {
        const ordered = Object.keys(response.data).reduce((acum, element) => {
          let pushcoin = response.data[element];

          acum[element] = {
            ...pushcoin,
            Title: element,
            icon: 'Icon',
            Mount: response.data[element].USD,
          };
          return acum;
        }, {});
        checkCallStatus(ordered);
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };
  const getDolar = async () => {
    Dolar()
      .get('/ve/venezuela/transfers-with-specific-bank/.json')
      .then((response) => {
        let devider = 0;
        let prom = 0;
        for (let i = 0; i < response.data.data.ad_count; i++) {
          if (response.data.data.ad_list[i].data.currency === 'VES') {
            prom += parseFloat(response.data.data.ad_list[i].data.temp_price);
            devider++;
          }
        }
        promedioBs.current = (prom / devider).toFixed(2);

        const addCoins: Coins = {
          Bs: {
            Title: 'Bs',
          },
          USD: {
            Title: 'USD',
          },
        };

        checkCallStatus(addCoins);
        //  getEuro(+promedio, parseFloat(dolar), acummulated);
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };
  const getEuro = () => {
    let prom = 0;
    Dolar()
      .get('/es/spain/.json')
      .then((response) => {
        let devider = 0;
        let prom = 0;
        for (let i = 0; i < response.data.data.ad_count; i++) {
          if (response.data.data.ad_list[i].data.currency === 'EUR') {
            prom += parseFloat(response.data.data.ad_list[i].data.temp_price);
            devider++;
          }
        }
        promEuro.current = parseFloat((prom / devider).toFixed(2));
        const addCoin: Coins = {
          EUR: {
            Title: 'EUR',
          },
        };
        checkCallStatus(addCoin);
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };
  const getPetro = async () => {
    let data = {
      coins: ['USD', 'PTR', 'EUR'],
      fiats: ['BS', 'USD', 'EUR'],
    };
    Petro()
      .post('/price/', data)
      .then((response) => {
        let addcoins: Coins = {
          PTR: {
            Mount: response.data.data['PTR']['USD'],
            Icon: 'Icon',
            Title: 'PTR',
            USD: response.data.data['PTR']['USD'],
            BS: response.data.data['PTR']['BS'],
          },
          USDBCV: {
            Mount: response.data.data['USD']['BS'],
            Icon: 'Icon',
            Title: 'USDBCV',
            USD: response.data.data['USD'],
            BS: response.data.data['USD']['BS'],
          },
        };

        checkCallStatus(addcoins);
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };
  return {
    ResetCall,
    error,
    coins: coins,
    lottie,
    notify,
    dolarBS,
    setNotify,
  };
};
export default useAskCoins;
