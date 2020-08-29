import React, { FC,memo,useState,useContext } from "react";
import { View, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import Context from "services/context";
import styles from "./style";
const Buttom: FC = ({children,press, style}) => {
  const [ripple,setRipple] = useState(false);
  const {colors,dark} = useContext(Context)
  const handle = () =>{
    setRipple(!ripple);
    press()
  }
    return (
      <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple((dark ? "#fff" : colors.strong),ripple,45)}
    //  onPres
    //onMagicTap={handle}
       onPress={handle}
    accessibilityComponentType={"button"}
    >
        <View style={style}>
        {children}</View>
      </TouchableNativeFeedback>
    );
};
export default memo(Buttom);