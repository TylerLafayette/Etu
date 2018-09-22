import React, { Component } from "react"
import { View } from "react-native"
import Svg,{
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask
} from "react-native-svg"

export default class FaceSvg extends Component {
    render() {
        return (
            <View>
                <Svg>
                    <Path class="st0" d="M39.7,319.7C39.7,412.7,115.1,488,208,488h0c92.9,0,168.3-75.3,168.3-168.3"/>
                    <Circle cx="32" cy="32.5" r="32"/>
                    <Circle cx="380" cy="32" r="32"/>
                    <Polyline class="st0" points="205,86 205,250 288,250 "/>
                </Svg>
            </View>
        )
    }
}