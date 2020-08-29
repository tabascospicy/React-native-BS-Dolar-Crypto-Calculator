import React, {FC, memo, useState, useContext, useEffect} from 'react';
import {TouchableOpacity, View, LayoutAnimation} from 'react-native';
import styles from './style';
import Context from 'services/context';
import {GlobalState} from 'interfaces/interfaces';
import { Radio, RadioGroup } from "@ui-kitten/components";
const ActionButtoms: FC = () => {
  const [message, setMessage] = useState({visible: false, show: ''});
  const {
    colors,
    originName,
    setSelectedDestiny,
    selectedDestiny
  }: GlobalState = useContext(Context);
  
  
  
  const toggle = (index) =>{
    setSelectedDestiny(prev=>index)
  }
  return (
    <View style={styles.container}>
      {!(originName == 'USD' || originName == 'USDBCV') && (
        <RadioGroup
          style={styles.selectDestiny}
          selectedIndex={selectedDestiny}
          onChange={toggle}>
          <Radio style={styles.padd}  >USD</Radio>
          <Radio style={styles.padd}  >Bs</Radio>
        </RadioGroup>
      )}
    </View>
  );
};
export default memo(ActionButtoms);
