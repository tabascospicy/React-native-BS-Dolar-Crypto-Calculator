import { StyleSheet } from 'react-native';
 import Colors from "themes/colors";
const styles = StyleSheet.create({
  container:{
    flex:1,borderBottomEndRadius:28, borderBottomStartRadius:28, 
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 1.00,
    shadowColor: "gray",
    elevation: 5,
    position:"relative"
  },
  iconBox: {
    padding: 10,
},
});
export default styles;