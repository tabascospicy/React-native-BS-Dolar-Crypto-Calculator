import React, { FC, useContext, Fragment,memo } from "react";
import { TouchableOpacity, View} from "react-native";
import Result from "components/result/result";
import Card from "components/card/card";
import { props, GlobalState } from "interfaces/interfaces";
import styles from "./style";
import StateContext from "services/context";
import ActionButtons from "components/actionButtoms/actionButtoms";
const Calculator: FC<props> = ({ name , ...props}) => {
    const State: GlobalState = useContext(StateContext);
    const { selected, setSelected,colors } = State;

    
    return (
        <Fragment>
          <View style={[styles.container,{backgroundColor:colors.light}]}>
            <Result />
            <ActionButtons/>
          </View>
            
            <Card {...props}  />
        </Fragment>
    );
};
export default memo(Calculator);
