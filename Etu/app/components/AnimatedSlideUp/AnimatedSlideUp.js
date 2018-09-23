import React, { Component } from "react"
import { Animated, View, Easing } from "react-native"

export default class AnimatedSlideUp extends Component {
    constructor() {
        super()
        this.positionY = new Animated.Value(200)
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        Animated.parallel([
            Animated.timing(
                this.positionY,
                {
                    toValue: 0,
                    duration: 500,
                    delay: this.props.delay || 0,
                    easing: Easing.bezier(.17,.67,0,.99)
                }
            )
        ]).start()
        setTimeout(() => this.setState({show: true}), this.props.delay)
    }
    render() {
        let { children } = this.props
        return (
            <Animated.View style={{
                opacity: this.state.show ? 1 : 0,
                transform: [{translateY: this.positionY}],
            }}>
                { children }
            </Animated.View>
        )
    }
}