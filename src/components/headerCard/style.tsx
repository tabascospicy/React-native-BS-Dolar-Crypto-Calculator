import { StyleSheet } from "react-native";
import Colors from "./../../themes/colors";
const styles = StyleSheet.create({
  container:{
    flex:1,
    borderRadius:30,
    padding:10,
    margin:10,
    maxHeight:80,
    alignItems:"center",
    flexDirection:"row",
    shadowColor: Colors.secondary,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Title:{
    fontSize:10,
    fontWeight:"600",
  },
  Mount:{
    fontSize:16,
    fontWeight:"800",
  },
  description:{
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: "contain",
},
})
export default styles;