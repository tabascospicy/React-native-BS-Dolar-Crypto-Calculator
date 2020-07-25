import { StatusBar } from "expo-status-bar";
import React, { FC, useEffect, useContext, useState } from "react";
import styles from "./style";
import { View, Text, LayoutAnimation } from "react-native";
import Result from "./../../components/result/result";
import Card from "./../../components/card/card";
import List from "./../../components/list/list";
import { props, GlobalState } from "interfaces/interfaces";
import HeaderCard from "./../../components/headerCard/HeaderCard";
import StateContext from "./../../services/context";
import NavBar from "./../../components/navBar/navBar";
const Home: FC<props> = ({ name }) => {
    const State: GlobalState = useContext(StateContext);
    const { selected, setSelected } = State;

    const Toggle = () => {
            setSelected && setSelected(!selected);
        };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <NavBar />
            {selected ? (
                <>
                    <Result />
                    <Card Toggle={Toggle} />
                </>
            ) : (
                <>
                    <HeaderCard></HeaderCard>
                    <List Toggle={Toggle} />
                </>
            )}
        </View>
        )
};
export default Home;
