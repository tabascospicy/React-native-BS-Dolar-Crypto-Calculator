import React, { FC, useState, useContext, useEffect } from "react";
import {
    Text,
    View,
    TextInput,
    Animated,
    Image,
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
    const { selected,setSelected, setResult, supportedCoins, colocarMonto, origin, destiny, setDestiny } = State;
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
        if(text ===""){
          setText((prev) => text);
          setResult && setResult((prev)=>0);
           return}
        let spaces = toFormat.split("0");
        const formated = parseFloat(text.split(",").join(""));
        setText((prev) => text);
        
        calculateAndSend(formated);
    };

    const calculateAndSend = (amount: number) => {
        let row = origin;
        let key = `${Object.keys(supportedCoins)[row]}`;
        let calculatedMount = supportedCoins[key]["Mount"] * amount;
        setDestiny &&  setDestiny((prev)=>selectedDestiny.row == 1 ? " Bs" : " $")
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
                         
                           <CoinSet Title={selectedOrigin && selectedOrigin["Title"]} />
                        {selectedOrigin && ((selectedOrigin["Title"]=="BS") ? "USD" : selectedOrigin["Title"]) }     
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
                        value={["BS", "USD"][selectedDestiny.row]}
                        placeholder={"holi"}
                        selectedIndex={selectedDestiny}
                        onSelect={(index) => setSelectedDestiny(index)}
                    >
                       {(selectedOrigin) && (selectedOrigin["Title"] !=="BS") && <SelectItem title={`USD`} />}
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

const CoinSet = (Title) => {
  switch (Title["Title"]) {
      case "USD":
          return <Image  source={require('./../../assets/icons/dollar.png')} style={styles.icon}/>;
          break;
      case "LTC":
          return <Image  source={require('./../../assets/icons/litecoin.png')} style={styles.icon} />;
          break;
      case "EUR":
          return <Image  source={require('./../../assets/icons/euro.png')} style={styles.icon} />;
          break;
      case "ETH":
          return <Image source={require('./../../assets/icons/ethereum.png')} style={styles.icon} />;
          break;
      case "DASH":
          return <Image source={require('./../../assets/icons/dashcoin.png')} style={styles.icon} />;
          break;
      case "BS":
          return <Image source={require('./../../assets/icons/dollar.png')} style={styles.icon} />;
          break;
      case "BTC":
          return <Image source={require('./../../assets/icons/bitcoin.png')} style={styles.icon} />;
          break;
      case "DOGE":
          return <Image source={require('./../../assets/icons/dogecoin.png')} style={styles.icon} />;
          break;
      case "PTR":
          return <Image source={require('./../../assets/icons/petro.png')} style={styles.icon} />;
          break;
      default:
          return <Image source={require('./../../assets/icons/petro.png')} style={styles.icon} />;
        break;
  }
};

export default Card;
