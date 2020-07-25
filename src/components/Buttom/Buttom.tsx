import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";
const Buttom: FC = ({children,press}) => {
    return (
      <TouchableOpacity style={styles.container} onPress={press}>
        {children}
      </TouchableOpacity>
    );
};
export default Buttom;