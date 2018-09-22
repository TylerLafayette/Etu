import React, { Component } from "react"
import { View, StatusBar, Text } from "react-native"

import Home from "./screens/Home"

export default class Index extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: "white",
                flex: 1
            }}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />
                <Home />
            </View>
        )
    }
}