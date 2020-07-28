import React, { FC,memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";
const Buttom: FC = ({children,press, style}) => {
    return (
      <TouchableOpacity  style={style} onPress={press}>
        {children}
      </TouchableOpacity>
    );
};
export default memo(Buttom);