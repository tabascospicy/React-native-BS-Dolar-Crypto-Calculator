import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: 100,
     //   width: "100%",
        paddingHorizontal: 15,
        flexWrap: "nowrap",
        flexDirection: "row",
    },
    FontMount: {
        fontSize: 22,
        letterSpacing: 1,
        opacity: 1,
        fontWeight: "bold",
        // fontFamily:"Nunito"
    },
    description: {
        flex: 1,
        paddingHorizontal: 10,
    },
    FontTitle: {
        fontSize: 20,
        letterSpacing: 2,
        opacity: 0.8,
        //    fontFamily:"Nunito"
    },
    icon: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
});

export default style;
