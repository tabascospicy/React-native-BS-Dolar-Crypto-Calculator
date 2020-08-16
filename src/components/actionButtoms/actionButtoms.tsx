import React, {FC, memo, useState, useContext, useEffect} from 'react';
import {TouchableOpacity, View, LayoutAnimation} from 'react-native';
import styles from './style';
import Context from 'services/context';
import Clipboard from 'react-native-vector-icons/MaterialCommunityIcons';
import {useClipboard} from '@react-native-community/clipboard';
import {Layout, Popover, Text} from '@ui-kitten/components';
import {GlobalState} from 'interfaces/interfaces';
import { Radio, RadioGroup } from "@ui-kitten/components";
const ActionButtoms: FC = () => {
  const [message, setMessage] = useState({visible: false, show: ''});
  const [data, setClipboard] = useClipboard();
  const {
    calculatedValues,
    colors,
    setCalculatedValues,
    originName,
    setSelectedDestiny,
    selectedDestiny
  }: GlobalState = useContext(Context);
  const saveOnClip = () => {
    setClipboard(`${calculatedValues.input} = ${calculatedValues.result}`);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setMessage({visible: true, show: 'guardado en portapapeles'});
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setMessage({visible: false, show: 'guardado en portapapeles'});
    }, 1000);
  };
  const borrar = () => {
    //  console.log(Math.ceil(+calculatedValues.result),"cel")
    setCalculatedValues({
      result: "0.00",
      input: "0",
    });
  };
  
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
      <TouchableOpacity style={styles.icon} onPress={saveOnClip}>
        <Clipboard name={'clipboard-outline'} size={30} color={colors.font} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Clipboard
          name={'delete-empty-outline'}
          size={30}
          color={colors.font}
          onPress={borrar}
        />
      </TouchableOpacity>
      <Popover
        visible={message.visible}
        anchor={() => <Text style={{borderRadius: 30}}></Text>}
        style={{borderRadius: 30}}
        onBackdropPress={() => setMessage({visible: false, show: ''})}>
        <Layout style={{padding: 10, backgroundColor: colors.strong}}>
          <Text style={{color: colors.font}}>{message.show}</Text>
        </Layout>
      </Popover>
    </View>
  );
};
export default memo(ActionButtoms);
