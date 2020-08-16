import React, {FC, useContext, Fragment, useRef} from 'react';
import {View, SafeAreaView, ScrollView,RefreshControl} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';
import {GlobalState} from 'interfaces/interfaces';
import CoinCard from 'components/coinCard/coinCard';
import StateContext from 'services/context';
const List: FC = (props) => {
  
  const {supportedCoins, colors,refresh,setRefresh,ResetCall}: GlobalState = useContext(StateContext);
  //colocar USD BCV y USD AFtim
  const list = useRef([
    'USD',
    'USDBCV',
    'Bs',
    'BTC',
    'ETH',
    'DOGE',
    'DASH',
    'EUR',
    'LTC',
    'PTR',
  ]);
  const handleRefresh = ()=>{
     setRefresh({onLoad:true,message:"Cargando..."});
      ResetCall();
  }
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.primary}]}>
      <ScrollView refreshControl={<RefreshControl refreshing={refresh.onLoad} onRefresh={handleRefresh} />} contentContainerStyle={styles.scrollView}>
        
        {list.current.map((element, i: number) => {
          let value = supportedCoins
            ? supportedCoins[element]
            : {Mount: '0.00', BS: '0', USD: '0', name: 'USD'};
          return (
            <Fragment key={i}>
              <CoinCard
                name={element}
                keys={i}
                Title={element}
                {...value}
                {...props}
              />
              <View
                style={[
                  styles.separator,
                  {backgroundColor: colors.strong},
                ]}></View>
            </Fragment>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default List;
