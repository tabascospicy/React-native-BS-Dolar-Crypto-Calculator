import React, { FC, useState, useContext, useEffect } from "react";
import {
    Text,
    View,
    TextInput,
    Animated,
    Image,
    TouchableOpacity,
    LayoutAnimation,
} from "react-native";
import styles from "./style";
import { props, GlobalState, CoinType } from "interfaces/interfaces";
import StateContext from "./../../services/context";
import accounting from "accounting";
import { Radio, RadioGroup } from "@ui-kitten/components";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import style from "./style";
import { AntDesign } from "@expo/vector-icons";
const Card: FC<props> = ({ Toggle }) => {
    const [text, setText] = useState("0");
    const [selectedDestiny, setSelectedDestiny] = useState(0);
    //    let inputs : number = 0;
    const [arrived, setArrived] = useState(false);
    const State: GlobalState = useContext(StateContext);
    const {
        Colors,
        setResult,
        supportedCoins,
        origin,
        destiny,
        setDestiny,
    } = State;
    const [selectedOrigin, setSelectedOrigin] = useState(
        supportedCoins && supportedCoins["USD"]
    );
    useEffect(() => {
        const animation = requestAnimationFrame(() => {
            LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
            );
            setArrived(!arrived);
        });

        const selectedName =
            supportedCoins && Object.keys(supportedCoins)[origin];
            supportedCoins && setSelectedOrigin(supportedCoins[selectedName]);
        return () => cancelAnimationFrame(animation);
    }, []);

    const sendChange = (text: string) => {
        let toFormat = text;
        if (text === "") {
            setText((prev) => text);
            setResult && setResult((prev) => 0);
            return;
        }
        let spaces = toFormat.split("0");
        const formated = parseFloat(text.split(",").join(""));
        setText((prev) => text);

        calculateAndSend(formated);
    };

    const calculateAndSend = (amount: number) => {
        let row = origin && origin;
        let key = `${supportedCoins && Object.keys(supportedCoins)[row]}`;
        let calculatedMount =
            supportedCoins && supportedCoins[key]["Mount"] * amount;
        setDestiny &&
            setDestiny((prev) => (selectedDestiny == 1 ? " Bs" : " $"));
        setResult &&
            setResult((prev) =>
                selectedDestiny == 1
                    ? calculatedMount * supportedCoins["Bs"]["BS"]
                    : calculatedMount
            );
    };
    useEffect(() => {
        if (parseFloat(text.split(",").join("")) > 0) {
            calculateAndSend(parseFloat(text.split(",").join("")));
        }
    }, [selectedDestiny]);

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    backgroundColor: Colors?.white,
                    height: arrived ? "40%" : "2%",
                    minHeight: arrived ? 300 : 0,
                },
            ]}
        >
            <Animated.View style={[styles.spacing]}>
                <TouchableOpacity style={[styles.iconBox]} onPress={Toggle}>
                    <AntDesign
                        style={{ opacity: 1 }}
                        name="back"
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
                <View
                    style={[styles.row, { backgroundColor: Colors?.secondary }]}
                >
                    <View style={styles.row2}>
                        <Text style={[styles.titleFont, styles.coin]}>
                            <CoinSet
                                Title={
                                    selectedOrigin && selectedOrigin["Title"]
                                }
                            />
                            {selectedOrigin &&
                                (selectedOrigin["Title"] == "BS"
                                    ? "USD"
                                    : selectedOrigin["Title"])}
                        </Text>
                        <Text style={[styles.titleFont, styles.coin]}>
                            {selectedOrigin && selectedDestiny
                                ? accounting.formatMoney(selectedOrigin["BS"], {
                                      symbol: destiny,
                                      thousand: ",",
                                      decimal: ".",
                                  })
                                : selectedOrigin &&
                                  accounting.formatMoney(
                                      selectedOrigin["Mount"],
                                      {
                                          symbol: destiny,
                                          thousand: ",",
                                          decimal: ".",
                                      }
                                  )}{" "}
                            $
                        </Text>
                    </View>
                    <RadioGroup
                        selectedIndex={selectedDestiny}
                        onChange={(index) => setSelectedDestiny(index)}
                    >
                        <Radio>USD</Radio>
                        <Radio>BS</Radio>
                    </RadioGroup>
                </View>
                <View
                    style={[styles.row, { backgroundColor: Colors?.secondary }]}
                >
                    <TextInput
                        style={styles.inputMount}
                        clearTextOnFocus={true}
                        onFocus={() => setText((prev) => "")}
                        clearButtonMode="while-editing"
                        keyboardType={"number-pad"}
                        value={text}
                        onChange={(text) => sendChange(text.nativeEvent.text)}
                    />
                </View>
            </Animated.View>
        </Animated.View>
    );
};

const CoinSet = (Title: CoinType) => {
    switch (Title["Title"]) {
        case "USD":
            return (
                <Image
                    source={require("./../../assets/icons/dollar.png")}
                    style={styles.icon}
                />
            );
            break;
        case "LTC":
            return (
                <Image
                    source={require("./../../assets/icons/litecoin.png")}
                    style={styles.icon}
                />
            );
            break;
        case "EUR":
            return (
                <Image
                    source={require("./../../assets/icons/euro.png")}
                    style={styles.icon}
                />
            );
            break;
        case "ETH":
            return (
                <Image
                    source={require("./../../assets/icons/ethereum.png")}
                    style={styles.icon}
                />
            );
            break;
        case "DASH":
            return (
                <Image
                    source={require("./../../assets/icons/dashcoin.png")}
                    style={styles.icon}
                />
            );
            break;
        case "BS":
            return (
                <Image
                    source={require("./../../assets/icons/dollar.png")}
                    style={styles.icon}
                />
            );
            break;
        case "BTC":
            return (
                <Image
                    source={require("./../../assets/icons/bitcoin.png")}
                    style={styles.icon}
                />
            );
            break;
        case "DOGE":
            return (
                <Image
                    source={require("./../../assets/icons/dogecoin.png")}
                    style={styles.icon}
                />
            );
            break;
        case "PTR":
            return (
                <Image
                    source={require("./../../assets/icons/petro.png")}
                    style={styles.icon}
                />
            );
            break;
        default:
            return (
                <Image
                    source={require("./../../assets/icons/petro.png")}
                    style={styles.icon}
                />
            );
            break;
    }
};

export default Card;
