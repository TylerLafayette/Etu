import React, { Component } from "react"
import { View } from "react-native"

import FaceSvg from "../FaceSvg"
import FaceHappySvg from "../FaceHappySvg"

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
                {this.props.happy ? <FaceHappySvg style={{width: 70, height: 70}} /> : <FaceSvg style={{width: 70, height: 70}} />}
            </View>
        )
    }
}