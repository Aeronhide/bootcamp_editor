import * as React from "react";
import type { CSSProperties, FC } from 'react'
import { useDrag } from 'react-dnd'
import { Shape } from "../Shape";
import { ShapesTypes as ST } from "../../constants/shapesTypes";

const style: CSSProperties = {
  position: 'absolute',
  background: 'transparent',
  cursor: 'move',
}

export interface DraggableItemProps {
  id?: any
  left?: number
  top?: number
  shape?: string
}

export const DraggableItem: FC<DraggableItemProps> = ({
  id = Date.now().toString(),
  left = 10,
  top = 10,
  shape
}) => {
  const [, drag] = useDrag(
    () => ({
      type: ST.COMMON,
      item: { id, left, top, shape },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, shape],
  )

  return (
    <div
      key={id}
      className="box"
      ref={drag}
      style={{ ...style, left, top }}
    >
      <Shape shapeType={shape} />
    </div>
  )
}
