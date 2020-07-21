import React, { FC, useState, useContext, useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./style";
import { props, CoinType,Coins, GlobalState } from "interfaces/interfaces";
import StateContext from "./../../services/context";
import accounting from "accounting";
//import { IndexPath, Layout, Select, SelectItem,SelectGroup } from "@ui-kitten/components";
const Card: FC<props> = (props) => {
    const [text, setText] = useState("0.00");
    const [selectedOrigin, setSelectedOrigin] = useState();
    const [selectedDestiny, setSelectedDestiny] = useState();
    //    let inputs : number = 0;
    const State : GlobalState = useContext(StateContext);
    const { setResult, supportedCoins,colocarMonto, setOrigin, setDestiny } = State;
    /*useEffect(()=>{
     setOrigin &&  setOrigin(prev =>  selectedOrigin.row  );
     setDestiny && setDestiny(prev =>selectedDestiny.row );
    },[selectedOrigin,selectedDestiny])*/
    const sendChange = (text: string) => {
        let toFormat = text;
        let spaces = toFormat.split("0");
        const formated = parseFloat(text.split(",").join(""));
        setText((prev) => text);
        calculateAndSend(formated)
    };
    const calculateAndSend = (amount : number) =>{
     let row  = selectedOrigin.row;
      let key = `${Object.keys(supportedCoins)[row]}`;
      let calculatedMount = supportedCoins[key]["Mount"] * amount;
      setResult((prev) => (selectedDestiny.row == 1) ? calculatedMount * supportedCoins["Bs"]["BS"] : calculatedMount );
    }
   let displayValue1 = Object.keys(supportedCoins)[selectedOrigin.row];
    let displayValue = ["USD","BS"][selectedDestiny.row];
    /* const addCeros = (value : string)=>{
      switch (inputs) {
        case 1:
          return "0.0" + value
          break;
        case 2:
          "0."+ value
        break;
        case 3 :
          let spaces = value.split("");
          return spaces[0]+"."+spaces[1]+spaces[2]
        break;
        default:
          return value
          break;
      }
    } */
    return (
        <View style={styles.container}>
            <View style={styles.spacing}>
                <View style={styles.row}>
                    <Text style={styles.titleFont}> De</Text>
                  
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.titleFont}> Monto</Text>
                    <TextInput
                        style={styles.inputMount}
                        placeholderTextColor="gray"
                        clearTextOnFocus={true}
                        editable={colocarMonto}
                        clearButtonMode="while-editing"
                        keyboardType={"numeric"}
                        value={text}
                        onChange={(text) => sendChange(text.nativeEvent.text)}
                    />
                </View>
            </View>
        </View>
    );
};
export default Card;
