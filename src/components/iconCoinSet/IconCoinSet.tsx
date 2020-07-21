import React, { FC } from "react";
import { CoinIcon } from "interfaces/interfaces";
import {Text} from "react-native";
const CoinSet: FC<CoinIcon> = ({ name = "USD" }) => {
  const Look  = () =>{
     switch (name) {
        case "USD":
            return <Dolar width={20} height={20} />;
          break;
        case "LTC":
            return <Lite width={20} height={20} />;
            break;
        case "EUR":
            return <Euro width={20} height={20} />;
            break;
        case "ETH":
            return <Ether width={20} height={20} />;
            break;
        case "DASH":
            return <Dash width={20} height={20} />;
            break;
        case "Bs":
            return <Dolar width={20} height={20} />;
            break;
        case "BTC":
            return <Bitcoin width={20} height={20} />;
            break;
        case "DOGE":
            return <Dodge width={20} height={20} />;
            break;
        case "PTR":
            return <Dolar width={20} height={20} />;
            break;
        default:
          return <Text>NOthing</Text>
          break;
    }
  }
   return <Look />
};
export default CoinSet;
