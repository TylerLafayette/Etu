import React, { Component } from "react"
import { View } from "react-native"

import FaceSvg from "../FaceSvg"

export default class FaceCircle extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: "#EFF4FD",
                borderRadius: 80,
                width: 120,
                height: 120,
                padding: 25,
                boxSizing: "border-box"
            }}>
                <FaceSvg style={{width: 70, height: 70}} />
            </View>
        )
    }
}