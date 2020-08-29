import React, {FC, useContext,useState,memo} from 'react';
import {View, TouchableHighlight,LayoutAnimation} from 'react-native';
import styles from './style';
import Button from 'components/Buttom/Buttom';
import Context from 'services/context';
import {GlobalState} from 'interfaces/interfaces';
import {Layout, Popover, Text} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';
import Back from 'react-native-vector-icons/Entypo';
import Clipboard from 'react-native-vector-icons/MaterialCommunityIcons';
import useCalculatedValues from 'Hooks/useCalculateValues';
import {useClipboard} from '@react-native-community/clipboard';
import {Radio, RadioGroup} from '@ui-kitten/components';
const Calculator: FC = () => {
  const State = useCalculatedValues();
  const [message, setMessage] = useState({visible: false, show: ''});
  const [data, setClipboard] = useClipboard();
  const {
    inverted,
    setInverted,
    calculate,
    addCero,
    remove,
    addDecimals,
    addNumber,
    colors,
    calculatedValues,
    setCalculatedValues
  } = State;
  const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const invert = () => {
    requestAnimationFrame(() => {
      setInverted && setInverted(!inverted);
    });
  };

  const deleteAll = () => {
    setCalculatedValues({
      result: "0.00",
      input: "0",
    });
  };

  const saveOnClip = () => {
    setClipboard(`${calculatedValues.input} = ${calculatedValues.result}`);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setMessage({visible: true, show: 'guardado en portapapeles'});
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setMessage({visible: false, show: 'guardado en portapapeles'});
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsRow}>
      <Popover
        visible={message.visible}
        anchor={() => <Text style={{borderRadius: 30}}></Text>}
        style={{borderRadius: 30}}
        onBackdropPress={() => setMessage({visible: false, show: ''})}>
        <Layout style={{padding: 10, backgroundColor: colors.strong}}>
          <Text style={{color: colors.font}}>{message.show}</Text>
        </Layout>
      </Popover>
        <View style={styles.numbers}>
          {Numbers.map((element, i) => {
            return (
              <Button
                style={styles.containerInput}
                key={i}
                press={() => addNumber(element)}>
                <Text style={[styles.number, {color: colors.font}]}>
                  {element}
                </Text>
              </Button>
            );
          })}
          <Button style={styles.containerInput} press={addDecimals}>
            <Text style={[styles.number, {color: colors.font}]}>.</Text>
          </Button>
          <Button style={styles.containerInput} press={() => addCero()}>
            <Text style={[styles.number, {color: colors.font}]}>0</Text>
          </Button>
          <Button style={styles.containerInput} press={remove}>
            <Back
              style={styles.number}
              name="erase"
              size={24}
              color={`${colors?.font}`}
            />
          </Button>
        </View>
        <View style={styles.buttonActionsColumn}>
          <Button
            style={styles.iconButtons}
            press={saveOnClip}>
            <Clipboard
              name={'clipboard-outline'}
              size={30}
              style={styles.number}
              color={colors.font}
            />
            <Button
              style={styles.iconButtons}
              press={deleteAll}>
              <Clipboard
                name={'delete-empty-outline'}
                size={30}
                style={styles.number}
                color={colors.font}
              />
            </Button>
          </Button>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <Button
          style={[styles.exchange, {backgroundColor: colors?.secondary}]}
          press={calculate}>
          <Text style={[styles.exchangeText, {color: colors?.white}]}>
            Calcular
            <Clipboard name="calculator" size={20} color={`${colors?.white}`} />
          </Text>
        </Button>
        <Button
          press={invert}
          style={[styles.rotate, {backgroundColor: colors.strong}]}>
          <Icon
            style={styles.retweet}
            name="retweet"
            size={20}
            color={`${colors?.font}`}
          />
        </Button>
      </View>
    </View>
  );
};
export default memo(Calculator);
