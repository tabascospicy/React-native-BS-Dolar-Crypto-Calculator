import React, {
  FC,
  useContext,
  useCallback,
} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import accounting from 'accounting';
import StateContext from 'services/context';
import {GlobalState} from 'interfaces/interfaces';
import CoinSet from 'components/image/index';
import image from 'components/image/index';
const ResultText: FC = ({input = false , symbol="Bs " }) => {
const {colors, supportedCoins, selectedDestiny , calculatedValues,originName ,inverted}: GlobalState = useContext(StateContext);

  const isDecimalInput = useCallback(() => {
    return calculatedValues?.input.includes('.') ? calculatedValues.input : accounting.formatNumber(calculatedValues?.input);
  }, [calculatedValues]);

 const formatResult = useCallback(()=>{
   console.log(calculatedValues);
 return (!(originName==="USD" || originName==="USDBCV")) && inverted ? getCriptoDecimals(calculatedValues?.result) :  accounting.formatMoney(calculatedValues?.result, {
    symbol : symbol,
    thousand: ',',
    decimal: '.',
    precision: selectedDestiny || ((originName === "USD" || originName==="USDBCV") && !inverted) ? 2 : 5,
  })
 },[symbol,originName,calculatedValues]);
 
const getCriptoDecimals = useCallback((num)=>{
  if(num.split("-")[1]){
    const exp = num.split("-")[1];
  let value = num.split(".")[0];
  let ceros = new Array(parseInt(exp - 1)).fill("0").join("");
   return "0."+ceros+value;
  }
  return accounting.formatMoney(num, {
    symbol : symbol,
    thousand: ',',
    decimal: '.',
    precision:  9,
  })
},[symbol])
  return (
    <Text adjustsFontSizeToFit={true} style={[styles.Mount, {color: colors?.font}, input && {borderBottomColor:colors.strong,borderBottomWidth:1}]}>
       {supportedCoins && input
        ? isDecimalInput()
        :formatResult() }
    </Text>
  );
};
export default ResultText;
