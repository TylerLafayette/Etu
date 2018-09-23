import React, { Component } from "react"
import { View, ScrollView, TouchableNativeFeedback } from "react-native"
import { Link } from "react-router-native"

import Title from "../components/Title"
import FaceCircle from "../components/FaceCircle"
import AnimatedSlideUp from "../components/AnimatedSlideUp"
import XPMeter from "../components/XPMeter"
import LineGraph from "../components/LineGraph"
import Transaction from "../components/Transaction"
import Offer from "../components/Offer";

export default class Rewards extends Component {
    render() {
        let transactions = this.props.data || []
        let total = transactions.reduce((a, item) => a+= item.amount, 0)
        let totalPoints = transactions.reduce((a, item) => a+= item.pointsEarned, 0)
        return (
            <ScrollView style={{
                boxSizing: "border-box",
                flex: 1,
                top: 0,
                bottom: 0
            }}>
                <View style={{
                    padding: 20
                }}>
                    <AnimatedSlideUp>
                        <Link to="/">
                            <View style={{
                                backgroundColor: "#eeeeee",
                                borderRadius: 12,
                                width: 100,
                                padding: 5,
                                alignSelf: "center"
                            }}>
                                <TouchableNativeFeedback style={{
                                }}
                                background={TouchableNativeFeedback.SelectableBackground()}>
                                        <Title fontSize={10}>BACK</Title>
                                </TouchableNativeFeedback>
                            </View>
                        </Link>
                    </AnimatedSlideUp>
                    <AnimatedSlideUp>
                        <View style={{
                            paddingVertical: 20,
                            alignItems: "center"
                        }}>
                            <FaceCircle happy={true} />
                        </View>
                    </AnimatedSlideUp>
                    <AnimatedSlideUp delay={50}>
                        <View style={{
                            backgroundColor: "#eeeeee",
                            borderRadius: 15,
                            width: 60,
                            padding: 5,
                            alignSelf: "center"
                        }}>
                            <TouchableNativeFeedback style={{
                            }}
                            background={TouchableNativeFeedback.SelectableBackground()}>
                                    <Title fontSize={12}>💎 {Math.floor(totalPoints)}</Title>
                            </TouchableNativeFeedback>
                        </View>
                    </AnimatedSlideUp>
                    <AnimatedSlideUp delay={150}>
                        <Offer></Offer>
                    </AnimatedSlideUp>
                </View>
            </ScrollView>
        )
    }
}