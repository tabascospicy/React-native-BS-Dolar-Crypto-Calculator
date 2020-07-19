import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { Text, View,TouchableHighlight } from "react-native";
import styles from "./style";
import { props } from "interfaces/interfaces";
const Card: FC<props> = ({ name }) => {
    return (
        <View style={styles.container}>
            <View style={styles.spacing}>
                <View style={styles.row}>
                    <Text style={styles.titleFont}> De</Text>
                    <Text style={styles.entryMount}>500.000$</Text>
                </View >
                <View style={styles.row}>
                    <Text style={styles.titleFont}> A</Text>
                    <Text  style={styles.entryMount}>600.699$</Text>
                </View>
                <View style={styles.inputRow}>
                   <Text style={styles.titleFont}> Monto</Text>
                   <TouchableHighlight><Text>Ingrese monto</Text></TouchableHighlight>
                </View>
            </View>
        </View>
    );
};
export default Card;
