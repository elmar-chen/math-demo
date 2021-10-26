import SVG from "svg.js"
var draw = SVG('drawing').size(300, 300)
var rect = draw.rect(100, 100).attr({ fill: '#f06' })
var circle = draw.circle(20).move(30, 20).attr({ fill: '#0f6' })
