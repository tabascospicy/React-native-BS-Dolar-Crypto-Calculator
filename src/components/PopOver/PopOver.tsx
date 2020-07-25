import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Popover, Text } from '@ui-kitten/components';
import {Notifier} from "interfaces/interfaces";
const UpdatedCoins :React.FC<Notifier> = ( {visible = false, setVisible , coins}) => {

  useEffect(()=>{
    if(visible ==true){
     const disappear = setTimeout(()=>{
        setVisible(false);
      },2000)
      return ()=> clearTimeout(disappear);
    }
  },[coins])
  return (
    <Popover
      visible={visible}
      anchor={() => <Text></Text>}
      onBackdropPress={() => setVisible(false)}>
      <Layout style={styles.content}>
        <Text>
          Monedas Actualizadas!
        </Text>
      </Layout>
    </Popover>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  avatar: {
    marginHorizontal: 4,
  },
});
export default UpdatedCoins;

