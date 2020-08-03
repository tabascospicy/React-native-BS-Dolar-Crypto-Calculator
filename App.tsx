<<<<<<< HEAD
import React, {useState, useEffect, Fragment} from 'react';
import {UIManager, Platform, View, StatusBar } from 'react-native';
import Home from './src/view/Home/Home';
import ErrorMessage from './src/components/ErrorMessage/ErrorMessage';
import {GlobalState, CalculeValue} from './src/interfaces/interfaces';
import useAskCoins from './src/Hooks/useAskCoins';
import Colors from './src/themes/colors';
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
  const {ResetCall, error, coins, lottie, notify, setNotify} = useAskCoins();
  const [inverted, setInverted] = useState(false);
  const [calculatedValues, setCalculatedValues] = useState<CalculeValue>({
    input: '0',
    result: '0',
  });
=======
import React, { useState } from "react";
import { UIManager, Platform,View } from "react-native";
import Home from "./src/view/Home/Home";
import ErrorMessage from "./src/components/ErrorMessage/ErrorMessage";
import { GlobalState, CalculeValue } from "./src/interfaces/interfaces";
import useAskCoins from "./src/Hooks/useAskCoins";
import Colors from "./src/themes/colors";
import StateProvider from "./src/services/context";
export default function App() {
    const [origin, setOrigin] = useState(0);
    const [originName, setOriginName] = useState("USD");
    const [selectedDestiny, setSelectedDestiny] = useState(0);
    const {
        ResetCall,
        error,
        coins,
        lottie,
        notify,
        setNotify,
    } = useAskCoins();
    const [inverted, setInverted] = useState(false);
    const [calculatedValues, setCalculatedValues] = useState<CalculeValue>({
        input: "0",
        result: "0",
    });
>>>>>>> 30214771c7016820021573bd15b28cc3506a664d

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
<<<<<<< HEAD
  }
  
  const GlobalValues: GlobalState = {
    supportedCoins: coins,
    origin,
    inverted,
    Colors,
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
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.strong}}>
      <StatusBar backgroundColor={Colors.strong} barStyle={'light-content'} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <StateProvider.Provider value={{...GlobalValues}}>
          {presentacion ? (
            <InitView />
          ) : (
            <Fragment>
              <Home name="holi" />
              {error && <ErrorMessage ResetCall={ResetCall} />}
              <UpdatedCoins
                coins={coins}
                visible={notify}
                setVisible={setNotify}
              />
            </Fragment>
          )}
        </StateProvider.Provider>
      </ApplicationProvider>
    </View>
  );
=======

    const GlobalValues: GlobalState = {
        supportedCoins: coins,
        origin,
        inverted,
        Colors,
        setOrigin,
        lottie,
        originName,
        setOriginName,
        setInverted,
        calculatedValues,
        setCalculatedValues,
        selectedDestiny,
        setSelectedDestiny,
    };

    return (
      <View style={{flex:1,backgroundColor:Colors.strong}}>
            
           
                <StateProvider.Provider value={{ ...GlobalValues }}>
                    <Home name="holi" />
                    {error && <ErrorMessage ResetCall={ResetCall} />}
                </StateProvider.Provider>
        </View>
    );
>>>>>>> 30214771c7016820021573bd15b28cc3506a664d
}
