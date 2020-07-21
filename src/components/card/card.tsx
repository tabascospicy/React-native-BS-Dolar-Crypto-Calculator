import React, { FC, useState, useContext, useEffect } from "react";
import {
    Text,
    View,
    TextInput,
    Animated,
    TouchableOpacity,
} from "react-native";
import styles from "./style";
import { props, GlobalState } from "interfaces/interfaces";
import StateContext from "./../../services/context";
import accounting from "accounting";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import style from "./style";
import { AntDesign } from "@expo/vector-icons";
const Card: FC<props> = (props) => {
    const [text, setText] = useState("0.00");
    const [selectedDestiny, setSelectedDestiny] = useState(new IndexPath(0));
    const [appear] = useState(new Animated.Value(0));
    //    let inputs : number = 0;
    const State: GlobalState = useContext(StateContext);
    const { selected,setSelected, setResult, supportedCoins, colocarMonto, origin } = State;
    const [selectedOrigin, setSelectedOrigin] = useState(supportedCoins && supportedCoins["USD"]);
    useEffect(() => {
        Animated.timing(appear, {
            toValue: 1,
            useNativeDriver: true,
            duration: 800,
        }).start();
        const selectedName = Object.keys(supportedCoins)[origin];
        setSelectedOrigin(supportedCoins[selectedName]);
    }, []);

    /*useEffect(()=>{
     setOrigin &&  setOrigin(prev =>  selectedOrigin.row  );
     setDestiny && setDestiny(prev =>selectedDestiny.row );
    },[selectedOrigin,selectedDestiny])*/
    const sendChange = (text: string) => {
        let toFormat = text;
        let spaces = toFormat.split("0");
        const formated = parseFloat(text.split(",").join(""));
        setText((prev) => text);
        calculateAndSend(formated);
    };

    const calculateAndSend = (amount: number) => {
        let row = origin;
        let key = `${Object.keys(supportedCoins)[row]}`;
        let calculatedMount = supportedCoins[key]["Mount"] * amount;
        setResult &&
            setResult((prev) =>
                selectedDestiny.row == 1
                    ? calculatedMount * supportedCoins["Bs"]["BS"]
                    : calculatedMount
            );
    };
    const { row } = selectedDestiny;
    useEffect(() => {
        if (parseFloat(text.split(",").join("")) > 0) {
            calculateAndSend(parseFloat(text.split(",").join("")));
        }
    }, [selectedDestiny.row]);

    const disappear = ()=>{
      Animated.timing(appear, {
        toValue: 0,
        useNativeDriver: true,
        duration: 400,
    }).start()
    }
    const handleBack = () =>{
         setSelected &&  setSelected(false)
    }
    return (
        <Animated.View style={[styles.container, { opacity: appear }]}>
            <View style={styles.spacing}>
                <TouchableOpacity onPress={handleBack}>
                    <AntDesign
                        style={{ opacity: 0.8 }}
                        name="caretleft"
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text style={styles.titleFont}> Seleccionada</Text>
                    <Text style={styles.titleFont}>
                        {selectedOrigin && selectedOrigin["Title"]}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.titleFont}> Tasa</Text>
                    <Text style={[styles.titleFont,{width:"50%"}]}>
                        {selectedOrigin && (selectedDestiny.row) ? selectedOrigin["BS"] : selectedOrigin && selectedOrigin["Mount"]} $
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.titleFont}> Seleccione Destino</Text>
                    <Select
                        style={styles.select}
                        value={["USD", "BS"][selectedDestiny.row]}
                        placeholder={"holi"}
                        selectedIndex={selectedDestiny}
                        onSelect={(index) => setSelectedDestiny(index)}
                    >
                        <SelectItem title={`USD`} />
                        <SelectItem title={`BS`} />
                    </Select>
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.titleFont}> Ingrese Monto</Text>
                    <TextInput
                        style={styles.inputMount}
                        placeholderTextColor="gray"
                        clearTextOnFocus={true}
                        editable={colocarMonto}
                        onFocus={()=>setText((prev)=>"")}
                        clearButtonMode="while-editing"
                        keyboardType={"numeric"}
                        value={text}
                        onChange={(text) => sendChange(text.nativeEvent.text)}
                    />
                </View>
            </View>
        </Animated.View>
    );
};
export default Card;
