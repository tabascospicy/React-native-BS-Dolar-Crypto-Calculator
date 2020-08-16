import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 200,
    flexWrap: 'wrap',
    //   marginBottom:80,
   // alignItems: 'center',
    justifyContent: 'center',
  },
  coinValue: {
    fontSize: 20,
    opacity: 0.8,
    padding: 10,
    fontWeight: 'bold',
  },
  CoinsContainer: {
    maxHeight: 300,
    flex: 1,
    marginHorizontal:10,
    borderRadius:20,
    alignItems: 'center'
  },
  retweet:{
    transform:[{rotate:"100deg"}]
  }
});

export default style;
