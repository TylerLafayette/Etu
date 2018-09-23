import React, { Component } from "react"
import { View, Text, Image } from "react-native"

import styles from "./styles"

export default class Offer extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Image style={styles.image} source={{uri: "https://www.orangeleafyogurt.com//assets/images/fb-share.jpg"}} />
                <View style={styles.info}>
                    <Text style={styles.header}>Free Frozen Yogurt</Text>
                    <Text style={styles.price}>💎 100</Text>
                </View>
            </View>
        )
    }
}