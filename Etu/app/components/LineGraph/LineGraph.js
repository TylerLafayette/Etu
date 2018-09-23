import React, { Component } from "react"
import { Animated, Easing } from "react-native"
import { AreaChart, Grid } from "react-native-svg-charts"
import * as shape from "d3-shape"

export default class LineGraph extends Component {
    constructor() {
        super()
        this._scaleY = new Animated.Value(0)
    }
    componentDidMount() {
        Animated.parallel([
            Animated.timing(
                this._scaleY,
                {
                    toValue: 1,
                    duration: 500,
                    delay: this.props.delay || 0,
                    easing: Easing.bezier(.17,.67,0,.99)
                }
            )
        ]).start()
    }
    render() {
        let accumulated = this.props.data.map(item => item.pointsEarned)
        return (
            <Animated.View style={{
                transform: [{scaleY: this._scaleY}]
            }}>
                <AreaChart
                    style={{ height: 200 }}
                    data={ accumulated }
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: "rgba(0, 233, 186, 1)" }}
                    animate={true}
                >
                </AreaChart>
            </Animated.View>
        )
    }
}