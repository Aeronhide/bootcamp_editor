import * as React from "react";
import { FC } from 'react'

interface ShapeColor {
  [key: string]: string
}

export const Shape: FC<{ shapeType?: string }> = ({ shapeType }) => {
  const shapePath = shapeType ? "assets/shapes.svg#" + shapeType : "assets/shapes.svg#square"

  const shapesColor: ShapeColor = {
    "square": "#FFFF00",
    "triangle": "#000",
    "circle": "#fff",
  }

  return (
    <div className="shape">
      <svg width="50" height="50" version="1.1" style={{ fill: shapesColor[shapeType] }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <use xlinkHref={shapePath} />
      </svg>
    </div>
  )
}
