import React, { FC, useContext, Fragment,memo } from "react";
import { TouchableOpacity} from "react-native";
import Result from "./../../../components/result/result";
import Card from "./../../../components/card/card";
import styles from "./style";
import StateContext from "./../../../services/context";
import Icon from 'react-native-vector-icons/AntDesign'; 
import Back from 'react-native-vector-icons/Entypo';

const Calculator: FC<props> = ({ name , ...props}) => {
    const State: GlobalState = useContext(StateContext);
    const { selected, setSelected } = State;

    
    return (
        <Fragment>
            <Result />
            <Card {...props}  />
        </Fragment>
    );
};
export default memo(Calculator);
