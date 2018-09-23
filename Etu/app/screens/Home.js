import React, { Component } from "react"
import { View, ScrollView } from "react-native"

import Title from "../components/Title"
import FaceCircle from "../components/FaceCircle"
import AnimatedSlideUp from "../components/AnimatedSlideUp"
import XPMeter from "../components/XPMeter";

export default class Home extends Component {
    render() {
        return (
            <ScrollView style={{
                padding: 20,
                flex: 1,
                top: 0,
                bottom: 0
            }}>
                <AnimatedSlideUp>
                    <View style={{
                        paddingVertical: 20,
                        alignItems: "center"
                    }}>
                        <FaceCircle />
                    </View>
                </AnimatedSlideUp>
                <AnimatedSlideUp delay={100}>
                    <XPMeter width={60} />
                </AnimatedSlideUp>
                <AnimatedSlideUp delay={200}>
                    <Title>Great work, Alex!</Title>
                </AnimatedSlideUp>
                <AnimatedSlideUp delay={250}>
                    <Title fontSize={28} style={{
                        color: "#4F6386"
                    }}>You've donated $109.46 in total.</Title>
                </AnimatedSlideUp>
            </ScrollView>
        )
    }
}