import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        padding: 6,
        marginStart: 10
    },
    date: {
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
    },
    temperature: {
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "column",
        marginEnd: 20,
    }
})

export default Styles