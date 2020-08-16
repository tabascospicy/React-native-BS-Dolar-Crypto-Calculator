import React, {useState, useEffect, Fragment} from 'react';
import {UIManager, Platform, View, StatusBar} from 'react-native';
import Home from './src/view/Home/Home';
import {AppearanceProvider} from 'react-native-appearance';
import ErrorMessage from './src/components/ErrorMessage/ErrorMessage';
import {GlobalState, CalculeValue,theme} from './src/interfaces/interfaces';
import useAskCoins from './src/Hooks/useAskCoins';
import {ColorsThemes} from "./src/themes/colors";
import StateProvider from './src/services/context';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import UpdatedCoins from './src/components/PopOver/PopOver';
import InitView from './src/components/initview/InitView';
export default function App() {
  const [origin, setOrigin] = useState(0);
  const [originName, setOriginName] = useState('USD');
  const [selectedDestiny, setSelectedDestiny] = useState(0);
  const [presentacion, setPresentacion] = useState(true);
  const [inverted, setInverted] = useState(false);
  const [dark,setDark] = useState(false);
  const [colors,setColors] = useState<theme>(ColorsThemes.dark);
  const [calculatedValues, setCalculatedValues] = useState<CalculeValue>({
    input: '0',
    result: '0',
  });
  const {ResetCall, error, coins, lottie, refresh, setRefresh} = useAskCoins();
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  useEffect(()=>{
    setColors(prev=> dark ? ColorsThemes.dark : ColorsThemes.light);
  },[dark])
  const GlobalValues: GlobalState = {
    refresh,
    setRefresh,
    ResetCall,
    supportedCoins: coins,
    dark,
    setDark,
    origin,
    inverted,
    colors,
    setOrigin,
    lottie,
    originName,
    setOriginName,
    setPresentacion,
    setInverted,
    calculatedValues,
    setCalculatedValues,
    selectedDestiny,
    setSelectedDestiny,
    setColors
  };
  return (
      <View style={{flex: 1, backgroundColor: colors.primary}}>
        <StatusBar backgroundColor={colors.strong} barStyle={ dark ? 'light-content':'dark-content'} />
        <ApplicationProvider {...eva} theme={dark ? eva.dark : eva.light}>
          <StateProvider.Provider value={{...GlobalValues}}>
            {presentacion ? (
              <InitView />
            ) : (
              <Fragment>
                <Home name="holi" />
                <UpdatedCoins coins={coins} />
              </Fragment>
            )}
          </StateProvider.Provider>
        </ApplicationProvider>
      </View>
    
  );
}
