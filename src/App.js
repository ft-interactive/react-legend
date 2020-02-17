import React from 'react';
import './App.css';

import legendData from "./LegendData"

function App() {
  console.log(legendData)
  const width = 200
  const height = 180

  let Rects = legendData.map((d, i) => {
    return<g key = {i}>
      <Rect
        color={d.color}
        x='10'
        y={i * 22}
        width={20}
        height={20}
      />
      <Label
        x='35'
        y={(i + 1) * 22 - 4}
        category={d.category}
      />
    </g>
  })

  let Circles = legendData.map((d, i) => {
    return <g>
      <Circle
        key={i}
        id={i}
        color={d.color}
        cx='10'
        cy={i * 22 + 11}
        radius='8'
      />
      <Label
        x='35'
        y={(i + 1) * 22 - 4}
        category={d.category}
      />
    </g>
  })

  let Labels = legendData.map((d, i) => {
    return <Label
      key={d.id}
      x='35'
      y={(i + 1) * 22 - 4}
      category = {d.category}
    />
  })

  return (
    <svg id = 'chartLegend' x = '50' y = '50' width = {width} height = {height}>
      {Rects}
    </svg>
  );
}

function Rect(props) {
  return (
    <rect
      width={props.width}
      height={props.height}
      id={props.id}
      fill={props.color}
      x='10'
      y={props.y}>
    </rect>
  )
}

function Circle(props) {
  return (
    <circle
      cx={props.cx}
      cy={props.cy}
      id={props.id}
      fill = {props.color}
      r = {props.radius}>
    </circle>
  )
}

function Label(props) {
  return (
    <text
      x={props.x}
      y={props.y}>
        {props.category}
    </text>
  )
}

export default App;
