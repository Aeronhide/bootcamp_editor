import * as React from "react";
import { useState } from "react";
import { FC } from 'react'

interface ShapeColor {
  [key: string]: string
}

export const Shape: FC<{ shapeType?: string }> = ({ shapeType }) => {
  const shapePath = shapeType ? "assets/shapes.svg#" + shapeType : "assets/shapes.svg#square"
  const [visibleOptions, setVisibleOptions] = useState(false)
  const shapesColor: ShapeColor = {
    "square": "#FFFF00",
    "triangle": "#000",
    "circle": "#fff",
  }

  const doubleClick = () => {
    setVisibleOptions(!visibleOptions)
  }

  return (
    <div className="shape" onDoubleClick={doubleClick}>
      <div className="shape_options" style={{ display: visibleOptions ? "block" : "none" }}>
        <button className="shape_button_resize">{'<>'}</button>
        <button className="shape_change_z_index"><img src="http://cdn.onlinewebfonts.com/svg/img_425549.png" alt="image" /></button>
      </div>

      <svg width="50" height="50" version="1.1" style={{ fill: shapesColor[shapeType] }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <use xlinkHref={shapePath} />
      </svg>
    </div>
  )
}
