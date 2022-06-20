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
  scaleHandler(event: React.MouseEvent): void,
  setVisibleOptions(visibleOptions: boolean): void,
  visibleOptions: boolean,
  scale: number
  zIndexHandler(index: string): void
}

export const Shape: FC<ShapeProps> = (props) => {
  const { shapeType, scaleHandler, setVisibleOptions, visibleOptions, scale, zIndexHandler } = props

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
    setVisibleOptions(!visibleOptions)
  }
  return (
    <div style={{ height: "100%" }}>
      <div className="shape" onDoubleClick={doubleClick} style={{ transform: `scale(${scale})` }}>
        <img className="shape_img" src={shapePath[shapeType]} alt="shape" />
      </div >
      <div className="s_options" style={{ display: visibleOptions ? "flex" : "none" }}>

        <button className="s_options_change_z_index" onClick={() => zIndexHandler('front')}>&#9650;</button>
        <button className="s_options_change_z_index" onClick={() => zIndexHandler('back')}>&#9660;</button>
        <button className="s_options_button_resize" onMouseDown={scaleHandler}>{'<>'}</button>
      </div>
    </div>
  )
}
