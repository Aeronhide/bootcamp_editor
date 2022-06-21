import * as React from "react";
import { useState } from "react";
import type { CSSProperties, FC } from 'react'
import { useDrag } from 'react-dnd'
import { Shape } from "../Shape";
import { ShapesTypes as ST } from "../../constants/shapesTypes";
import { ShapeItem, ShapeMap } from "../interfaces";
import { useDispatch } from "react-redux";
import { SetEditShapeAction, UpdateShapeAction } from "../../actions/shape.actions";

const style: CSSProperties = {
  position: 'absolute',
  background: 'transparent',
  cursor: 'move',
}

export const DraggableItem: FC<ShapeItem> = ({
  id = Date.now().toString(),
  left = 10,
  top = 10,
  shape,
  width = 50,
  height = 50,
  scale = 1,
  zIndex = 10,
  editing = false
}) => {
  const dispatch = useDispatch();

  const [, drag] = useDrag(
    () => ({
      type: ST.COMMON,
      item: { id, left, top, shape, width, height, scale, zIndex, editing },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: !editing,
    }),
    [id, left, top, shape, width, height, scale, zIndex, editing],
  )

  const editingShape = () => {
    dispatch(SetEditShapeAction({ id, editing: !editing }))
  }

  return (
    <div
      key={id}
      className="box"
      ref={drag}
      style={{ ...style, left, top, width, height, zIndex }}
    >
      <Shape
        shapeType={shape}
        scale={scale}
        setEditing={editingShape}
        editing={editing}
      />
    </div>
  )
}
