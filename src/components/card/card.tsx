import React, { FC, useState, useContext, useEffect,memo } from "react";
import {Animated,LayoutAnimation,} from "react-native";
import styles from "./style";
import { props, GlobalState, } from "interfaces/interfaces";
import StateContext from "services/context";

import Calculator from "components/Calculator/Calculator";
const Card: FC<props> = (props) => {

    const [arrived, setArrived] = useState(false);
    const State: GlobalState = useContext(StateContext);
    const {Colors} = State;
    
    useEffect(() => {
        const animation = requestAnimationFrame(() => {
            LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
            );
            setArrived(!arrived);
        });
        return () => cancelAnimationFrame(animation);
    }, []);
    return (
        <Animated.View
            style={[
                styles.container,
                {
                    backgroundColor: Colors?.strong,
                    height: arrived ? "60%" : "2%",
                }
            ]}
        >
          <Calculator  />
        </Animated.View>
            
    );
};

export default memo(Card);
