import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrapper: {
        marginTop: 40,
        flex: 1,
        height: 270,
        borderRadius: 14,
        backgroundColor: "#F1F1F1"
    },
    image: {
        width: "100%",
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        height: 200,
        resizeMode: "cover"
    },
    header: {
        fontWeight: "bold",
        color: "#323C50",
        fontSize: 16
    },
    info: {
        marginTop: 10,
        padding: 20,
        height: 50,
        justifyContent: "center",
    },
    price: {
        paddingTop: 5
    }
})