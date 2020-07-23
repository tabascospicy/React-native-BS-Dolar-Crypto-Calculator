import React, { FC, useState, useContext, useEffect } from "react";
import {
    Text,
    View,
    TextInput,
    Animated,
    Image,
    TouchableOpacity,
    LayoutAnimation
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
    const [arrived,setArrived] = useState(false);
    const State: GlobalState = useContext(StateContext);
    const { selected,setSelected, setResult, supportedCoins, colocarMonto, origin, destiny, setDestiny } = State;
    const [selectedOrigin, setSelectedOrigin] = useState(supportedCoins && supportedCoins["USD"]);
    useEffect(() => {
        
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear , ()=>{
          Animated.timing(appear, {
            toValue: 1,
            useNativeDriver: true,
            duration:200,
        }).start();
        });
        setArrived(!arrived);
        const selectedName = supportedCoins && Object.keys(supportedCoins)[origin];
       supportedCoins &&  setSelectedOrigin(supportedCoins[selectedName]);
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
        let row  = origin && origin;
        let key = `${supportedCoins && Object.keys(supportedCoins)[row]}`;
        let calculatedMount = supportedCoins && supportedCoins[key]["Mount"] * amount;
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
        <Animated.View style={[styles.container, { opacity: 1,height : arrived ? "40%" :"0%",transform:[{translateY:appear.interpolate({inputRange:[0,1],outputRange:[300,0]})}]  }]}>
            <Animated.View style={[styles.spacing,{opacity:appear}]}>
                <TouchableOpacity style={styles.iconBox} onPress={handleBack}>
                    <AntDesign
                        style={{ opacity: 1 }}
                        name="caretleft"
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
                <View style={styles.row}>
                  <View style={styles.row2}>
                      <Text style={[styles.titleFont,styles.coin]}>
                            <CoinSet Title={selectedOrigin && selectedOrigin["Title"]} />
                          {selectedOrigin && ((selectedOrigin["Title"]=="BS") ? "USD" : selectedOrigin["Title"]) }     
                      </Text>
                      <Text style={[styles.titleFont,styles.coin]}>
                          {selectedOrigin && (selectedDestiny.row) ? accounting.formatMoney(selectedOrigin["BS"],{symbol:destiny,thousand:',',decimal:'.'})   : selectedOrigin && accounting.formatMoney(selectedOrigin["Mount"],{symbol:destiny,thousand:',',decimal:'.'})} $
                      </Text>
                  </View>
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
                <View style={[styles.row]}>
                    <TextInput
                        style={styles.inputMount}
                        placeholderTextColor="gray"
                        clearTextOnFocus={true}
                        editable={colocarMonto}
                        onFocus={()=>setText((prev)=>"")}
                        clearButtonMode="while-editing"
                        keyboardType={"number-pad"}
                        value={text}
                        onChange={(text) => sendChange(text.nativeEvent.text)}
                    /></View>
            </Animated.View>
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
