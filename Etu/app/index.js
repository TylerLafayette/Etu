import React, { Component } from "react"
import { View, StatusBar, Text } from "react-native"
import { NativeRouter, Switch, Route, AndroidBackButton } from "react-router-native"

import Home from "./screens/Home"
import Rewards from "./screens/Rewards"

export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            name: "friend",
            xp: 0,
            level: 0
        }
    }
    componentDidMount() {
        this.refresh = this.refresh.bind(this)
        this.refresh()
    }
    async refresh() {
        let response = await fetch("http://10.10.163.242:3000/user")
        let data = await response.json()
        this.setState({data: data.user.transactions, name: data.user.name, xp: data.user.xp, level: data.user.level})
    }
    render() {
        return (
            <View style={{
                backgroundColor: "white",
                flex: 1
            }}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />
                <NativeRouter>
                    <AndroidBackButton>
                        <Switch>
                            <Route exact path="/">
                                <Home name={this.state.name} xp={this.state.xp} level={this.state.level} data={this.state.data} refresh={this.refresh.bind(this)} />
                            </Route>
                            <Route exact path="/rewards">
                                <Rewards data={this.state.data} />
                            </Route>
                        </Switch>
                    </AndroidBackButton>
                </NativeRouter>
            </View>
        )
    }
}