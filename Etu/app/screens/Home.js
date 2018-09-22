import React, { Component } from "react"
import { View } from "react-native"

import Title from "../components/Title"

export default class Home extends Component {
    render() {
        return (
            <View style={{
                padding: 20
            }}>
                <Title>Great work, Alex!</Title>
                <Title fontSize={28} style={{
                    color: "#4F6386"
                }}>You've donated $109.46 in total.</Title>
            </View>
        )
    }
}