import { StatusBar } from "expo-status-bar";
import React, { FC, useEffect, useContext, useState } from "react";
import styles from "./style";
import { View, TouchableOpacity } from "react-native";
import Result from "./../../components/result/result";
import Card from "./../../components/card/card";
import List from "./../../components/list/list";
import { props, GlobalState } from "interfaces/interfaces";
import HeaderCard from "./../../components/headerCard/HeaderCard";
import StateContext from "./../../services/context";
import NavBar from "./../../components/navBar/navBar";
import { AntDesign } from "@expo/vector-icons";
const Home: FC<props> = ({ name }) => {
    const State: GlobalState = useContext(StateContext);
    const { selected, setSelected, supportedCoins } = State;

    const Toggle = () => {
        setSelected && setSelected(!selected);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <NavBar />
            {selected ? (
                <>
                    <TouchableOpacity style={[styles.iconBox]} onPress={Toggle}>
                        <AntDesign
                            style={{ opacity: 1 }}
                            name="back"
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                    <Result />
                    <Card Toggle={Toggle} />
                </>
            ) : (
                <>
                    <HeaderCard
                        image={"USD"}
                        text={"1 USD :"}
                        mount={supportedCoins["USD"]["BS"]}
                    ></HeaderCard>
                    <List Toggle={Toggle} />
                </>
            )}
        </View>
    );
};
export default Home;
