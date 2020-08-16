import React, { useEffect,useContext,useRef,useState} from 'react';
import { StyleSheet , LayoutAnimation } from 'react-native';
import { Layout, Popover, Text } from '@ui-kitten/components';
import {Notifier, GlobalState} from "interfaces/interfaces";
import Context from "services/context";
const UpdatedCoins :React.FC<Notifier> = () => {
  const {refresh}:GlobalState = useContext(Context);
  const [visible,setVisible] = useState(false);

  useEffect(()=>{
    requestAnimationFrame(()=>{
      LayoutAnimation.configureNext(
        LayoutAnimation.Presets.easeInEaseOut
    );
      setVisible(true);
    const timer  = !refresh.onLoad ? setTimeout(()=>{
      LayoutAnimation.configureNext(
        LayoutAnimation.Presets.easeInEaseOut
    );

      setVisible(false);
    },2000) : null;
    return () => timer ? clearTimeout(timer) : console.log("holi");
    })
    
  },[refresh])

  return (
    <Popover
      visible={visible}
      anchor={() => <Text></Text>}
     >
      <Layout style={styles.content}>
        <Text>
          {refresh.message}
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

