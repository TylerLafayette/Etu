import React, { Component } from "react"
import { View, Text } from "react-native"

import styles from "./styles"

export default class Transaction extends Component {
    constructor() {
        super()
        this.months = months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        this.state = {
            formattedDate: ""
        }
    }
    componentDidMount() {
        const date = new Date(this.props.data.date)
        let month = months[date.getMonth()]
        let day = date.getDate()
        let year = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let ampm = hours >= 12 ? "pm" : "am"
        hours = hours % 12
        hours = hours ? hours : 12
        minutes = minutes < 10 ? "0"+minutes : minutes
        let strTime = hours + ":" + minutes + " " + ampm
        this.setState({formattedDate: `${month} ${day}, ${year} ${strTime}`})
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.column}>
                    <Text style={styles.columnAmount}>${this.props.data.amount}</Text>
                    <Text style={styles.rewardAmount}>💎 {Math.floor(this.props.data.pointsEarned)}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.columnDate}>{this.state.formattedDate}</Text>
                </View>
            </View>
        )
    }
}