import { StyleSheet } from "react-native";
import Colors from "./../../themes/colors";
const style = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 200,
        flexWrap: "wrap",
        //   marginBottom:80,
        alignItems: "center",
        justifyContent: "center",
       
    },
    coinValue: {
        fontSize: 20,
        opacity: 0.8,
        padding: 10,
        color: Colors.font,
        fontWeight: "bold",
    },
});

export default style;
