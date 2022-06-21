import * as React from "react";
import { FC } from 'react'
import squareUrl from "../assets/square.svg"
import circleUrl from "../assets/circle.svg"
import triangleUrl from "../assets/triangle.svg"

interface ShapeProp {
  [key: string]: string
}

interface ShapeProps {
  shapeType?: string,
  scale: number,
  editing: boolean,
  setEditing(editing: boolean): void
}

export const Shape: FC<ShapeProps> = (props) => {
  const { shapeType, scale, setEditing, editing } = props

  const shapePath: ShapeProp = {
    "square": squareUrl,
    "circle": circleUrl,
    "triangle": triangleUrl
  }

  const shapesColor: ShapeProp = {
    "square": "#FFFF00",
    "triangle": "#000",
    "circle": "#fff",
  }

  const doubleClick = () => {
    setEditing(!editing)
  }
  return (
    <div className="shape" onDoubleClick={doubleClick} style={{ transform: `scale(${scale})`, border: editing ? '1px dashed #0000FF' : 'none' }}>
      <img className="shape_img" src={shapePath[shapeType]} alt="shape" />
    </div >
  )
}
