import React, {FC, useContext} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './style';
import Button from 'components/Buttom/Buttom';
import Context from 'services/context';
import {GlobalState} from 'interfaces/interfaces';
import Icon from 'react-native-vector-icons/AntDesign';
import Back from 'react-native-vector-icons/Entypo';
import Clipboard from 'react-native-vector-icons/MaterialCommunityIcons';
import useCalculatedValues from 'Hooks/useCalculateValues';
import {Radio, RadioGroup} from '@ui-kitten/components';
const Calculator: FC = () => {
  const State = useCalculatedValues();
  const {
    inverted,
    setInverted,
    calculate,
    originName,
    addCero,
    setSelectedDestiny,
    remove,
    addDecimals,
    addNumber,
    selectedDestiny,
    colors,
  } = State;
  const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const invert = () => {
    requestAnimationFrame(() => {
      setInverted && setInverted(!inverted);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonsRow}>
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
export default Calculator;
