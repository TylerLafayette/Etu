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
            <Svg width="70" height="70" viewBox="0 0 412 513">
                <Path fill="none" stroke="#323C50" strokeWidth={50} d="M39.7,319.7C39.7,412.7,115.1,488,208,488h0c92.9,0,168.3-75.3,168.3-168.3"/>
                <Circle fill="#323C50" cx="32" cy="32.5" r="32"/>
                <Circle fill="#323C50" cx="380" cy="32" r="32"/>
                <Polyline fill="none" stroke="#323C50" strokeWidth={50} points="205,86 205,250 288,250 "/>
            </Svg>
        )
    }
}
// <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In  -->
// <svg version="1.1"
// 	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
// 	 x="0px" y="0px" width="412px" height="513px" viewBox="0 0 412 513" style="enable-background:new 0 0 412 513;"
// 	 xml:space="preserve">
// <style type="text/css">
// 	.st0{fill:none;stroke:#000000;stroke-width:50;stroke-miterlimit:10;}
// </style>
// <defs>
// </defs>
// <path class="st0" d="M39.7,319.7C39.7,412.7,115.1,488,208,488h0c92.9,0,168.3-75.3,168.3-168.3"/>
// <circle cx="32" cy="32.5" r="32"/>
// <circle cx="380" cy="32" r="32"/>
// <polyline class="st0" points="205,86 205,250 288,250 "/>
// </svg>