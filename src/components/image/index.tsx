import React, { FC, useState, useContext, useEffect } from "react";
import {
    Image,
} from "react-native";
import styles from "./style";
import { CoinType } from "interfaces/interfaces";

const CoinSet = ({Title ,style}) => {
  switch (Title) {
      case "USD":
          return (
              <Image
                  source={require("./../../assets/icons/dollar.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
      case "LTC":
          return (
              <Image
                  source={require("./../../assets/icons/litecoin.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
      case "EUR":
          return (
              <Image
                  source={require("./../../assets/icons/euro.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
      case "ETH":
          return (
              <Image
                  source={require("./../../assets/icons/ethereum.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
      case "DASH":
          return (
              <Image
                  source={require("./../../assets/icons/dashcoin.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
      case "BS":
          return (
              <Image
                  source={require("./../../assets/icons/bs.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
      case "BTC":
          return (
              <Image
                  source={require("./../../assets/icons/bitcoin.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
      case "DOGE":
          return (
              <Image
                  source={require("./../../assets/icons/dogecoin.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
      case "$":
          return (
              <Image
                  source={require("./../../assets/icons/dollar.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
      case "PTR":
          return (
              <Image
                  source={require("./../../assets/icons/petro.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
      default:
          return (
              <Image
                  source={require("./../../assets/icons/bs.png")}
                  style={style ? style : styles.icon}
              />
          );
          break;
  }
};
export default CoinSet;
