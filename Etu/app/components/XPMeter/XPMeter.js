import React, { Component } from "react"
import { Animated, Easing, View, Text } from "react-native"


import styles from "./styles"
import Title from "../Title";

export default class XPMeter extends Component {
    constructor() {
        super()
        this._width = new Animated.Value(0)
        this.state = {
            
        }
    }
    componentDidMount() {
    }
    render() {
        Animated.timing(
            this._width,
            {
                toValue: Math.floor(this.props.width),
                duration: 500,
                delay: 150,
                easing: Easing.bezier(.17,.67,0,.99)
            }
        ).start()
        return (
            <View style={styles.xpWrapper}>
                <Title fontSize={18} style={styles.levelTitle}>Level {this.props.level}</Title>
                <View style={styles.barWrapper}>
                    <Animated.View style={[styles.barInner, {
                        width: this._width.interpolate({
                            inputRange: [0, 100],
                            outputRange: ['0%', '100%'],
                        })
                    }]}>
                    </Animated.View>
                </View>
                <Text style={styles.progressText}>{Math.floor(this.props.width)}%</Text>
            </View>
        )
    }
}