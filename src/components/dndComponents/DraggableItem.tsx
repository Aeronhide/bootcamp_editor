import * as React from "react";
import { useState } from "react";
import type { CSSProperties, FC } from 'react'
import { useDrag } from 'react-dnd'
import { Shape } from "../Shape";
import { ShapesTypes as ST } from "../../constants/shapesTypes";
import { ShapeItem, ShapeMap } from "../interfaces";
import { useDispatch } from "react-redux";
import { UpdateShapeAction } from "../../actions/shape.actions";

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
  zIndex = 10
}) => {
  const dispatch = useDispatch();

  const [visibleOptions, setVisibleOptions] = useState(false)

  const [, drag] = useDrag(
    () => ({
      type: ST.COMMON,
      item: { id, left, top, shape, width, height, scale },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: !visibleOptions,
    }),
    [id, left, top, shape, width, height, scale, visibleOptions],
  )

  const scaleHandler = () => {
    function onMouseMove(mouseMoveEvent: MouseEvent) {
      let initialTopPosition = top
      if (0 < initialTopPosition - (mouseMoveEvent.clientY - 50)) {
        dispatch(UpdateShapeAction({ id, scale: scale += 0.1, zIndex }))
      } else {
        dispatch(UpdateShapeAction({ id, scale: scale -= 0.1, zIndex }))
      }

    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      setVisibleOptions(false)
    }

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };

  const zIndexHandler = (index: string) => {
    if (index === "front") return dispatch(UpdateShapeAction({ id, scale, zIndex: zIndex += 1 }))

    if (zIndex === 0) return dispatch(UpdateShapeAction({ id, scale, zIndex: 0 }))

    dispatch(UpdateShapeAction({ id, scale, zIndex: zIndex -= 1 }))
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
        scaleHandler={scaleHandler}
        setVisibleOptions={setVisibleOptions}
        visibleOptions={visibleOptions}
        scale={scale}
        zIndexHandler={zIndexHandler}
      />
    </div>
  )
}
