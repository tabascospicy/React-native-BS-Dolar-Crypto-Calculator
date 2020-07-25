import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        zIndex:1,
        position: "absolute",
        bottom: 0,
        minHeight: 280,
        borderTopEndRadius: 50,
        borderTopLeftRadius: 50,
        justifyContent: "flex-start",
      
        //   maxHeight:500,
        backgroundColor: "white",
    },
    titleFont: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        opacity: 0.8,
        // alignSelf:"flex-start",
        flexWrap: "wrap",
        textAlign: "left",
        textAlignVertical: "center",
        letterSpacing: 2,
        // fontFamily:"Nunito"
    },
    select: {
       
        flex: 1,
    },
    spacing: {
        flex: 1,
        padding: 20,
        position: "relative",
    },
    row: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: "rgba(244,216,205,0.2)",
        borderRadius: 20,
        padding: 20,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    row2: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    coin: {
        width: "100%",
    },
    entryMount: {
        fontSize: 24,
        color: "#f8f9fc",
        opacity: 1,
        letterSpacing: 2,
        //   fontFamily:"Nunito"
    },
    inputRow: {
        flex: 2,
        width: "100%",
        flexDirection: "column",
    },
    inputMount: {
        flex: 1,
        width: "80%",
        marginTop: 10,
        fontWeight: "bold",
        alignSelf: "center",
        borderColor: "black",
        color: "black",
        borderBottomWidth: 2,
        padding: 2,
        opacity: 0.9,
    },
    icon: {
        width: 20,
        height: 20,
    },
    iconBox: {
        padding: 10,
    },
});

export default style;
