import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderRadius:30,
    padding:10,
    margin:10,
    maxHeight:70,
    alignItems:"center",
    flexDirection:"row"
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