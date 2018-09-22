import React, { Component } from "react"
import { View, Text } from "react-native"

import styles from "./styles"

export default class Title extends Component {
    render() {
        let { children } = this.props
        return (
            <Text style={[styles.title, {
                fontSize: this.props.fontSize || 38
            }, this.props.style || {}]}>{children}</Text>
        )
    }
}