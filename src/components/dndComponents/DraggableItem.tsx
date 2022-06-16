import * as React from "react";
import type { CSSProperties, FC, ReactNode } from 'react'
import { useDrag } from 'react-dnd'
import { Shape } from "../Shape";

const style: CSSProperties = {
  position: 'absolute',
  background: 'transparent',
  cursor: 'move',
}

export interface DraggableItemProps {
  id: any
  left: number
  top: number
}

export const DraggableItem: FC<DraggableItemProps> = ({
  id,
  left,
  top,
}) => {
  const [, drag] = useDrag(
    () => ({
      type: 'square',
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  )

  return (
    <div
      key={id}
      className="box"
      ref={drag}
      style={{ ...style, left, top }}
      data-testid={id}
    >
      <Shape shapeType="circle" />
    </div>
  )
}
