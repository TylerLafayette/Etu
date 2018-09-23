import React, { Component } from "react"
import { View, ScrollView, TouchableNativeFeedback, RefreshControl } from "react-native"
import { Link } from "react-router-native"

import Title from "../components/Title"
import FaceCircle from "../components/FaceCircle"
import AnimatedSlideUp from "../components/AnimatedSlideUp"
import XPMeter from "../components/XPMeter"
import LineGraph from "../components/LineGraph"
import Transaction from "../components/Transaction"

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            refreshing: false
        }
    }
    _onRefresh() {
        this.props.refresh()
    }
    render() {
        let transactions = this.props.data || []
        let total = transactions.reduce((a, item) => a+= item.amount, 0)
        let totalPoints = transactions.reduce((a, item) => a+= item.pointsEarned, 0)
        let levelRequired = this.props.level + 1
        let xpRequired = levelRequired * 2 + 10
        return (
            <ScrollView 
            refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    title="Loading..."
                />
            }
            style={{
                boxSizing: "border-box",
                flex: 1,
                top: 0,
                bottom: 0
            }}>
                <View style={{
                    padding: 20
                }}>
                    <AnimatedSlideUp>
                        <Link to="/rewards">
                            <View style={{
                                backgroundColor: "#eeeeee",
                                borderRadius: 12,
                                width: 50,
                                padding: 5,
                                alignSelf: "center"
                            }}>
                                <TouchableNativeFeedback style={{
                                }}
                                background={TouchableNativeFeedback.SelectableBackground()}>
                                        <Title fontSize={10}>💎 {Math.floor(totalPoints)}</Title>
                                </TouchableNativeFeedback>
                            </View>
                        </Link>
                    </AnimatedSlideUp>
                    <AnimatedSlideUp>
                        <View style={{
                            paddingVertical: 20,
                            alignItems: "center"
                        }}>
                            <FaceCircle />
                        </View>
                    </AnimatedSlideUp>
                    <AnimatedSlideUp delay={100}>
                        <XPMeter level={this.props.level} width={(this.props.xp / xpRequired) * 100} />
                    </AnimatedSlideUp>
                    <AnimatedSlideUp delay={200}>
                        <Title>Great work, {this.props.name}!</Title>
                    </AnimatedSlideUp>
                    <AnimatedSlideUp delay={250}>
                        <Title fontSize={28} style={{
                            color: "#4F6386"
                        }}>You've donated ${total.toFixed(2)} in total.</Title>
                    </AnimatedSlideUp>
                </View>
                <AnimatedSlideUp delay={350}>
                    <LineGraph data={transactions} delay={350} />
                </AnimatedSlideUp>
                <View style={{
                    padding: 20
                }}>
                    <AnimatedSlideUp delay={450}>
                        {
                            transactions.map((item) => (
                                <Transaction data={item}></Transaction>
                            ))
                        }
                    </AnimatedSlideUp>
                </View>
            </ScrollView>
        )
    }
}