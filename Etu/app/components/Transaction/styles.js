import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrapper: {
        left: 0,
        right: 0,
        flex: 1,
        height: 50,
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "center"
    },
    column: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center"
    },
    columnAmount: {
        fontWeight: "bold",
        color: "#00E9BA",
        fontSize: 18
    },
    rewardAmount: {
        paddingLeft: 5,
        color: "#00A5FF"
    },
    columnDate: {
        fontWeight: "normal",
        color: "#323C50",
        fontSize: 12
    }
})