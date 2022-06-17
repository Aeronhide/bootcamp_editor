import * as React from "react";
import type { CSSProperties, FC } from 'react'
import { useDrag } from 'react-dnd'
import { Shape } from "../Shape";
import { ShapesTypes as ST } from "../../constants/shapesTypes";
import { ShapeItem, ShapeMap } from "../interfaces";

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
  width = 100,
  height = 100
}) => {
  const [, drag] = useDrag(
    () => ({
      type: ST.COMMON,
      item: { id, left, top, shape, width, height },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, shape, width, height],
  )

  // const handler = (mouseDownEvent: MouseEvent, shape: ShapeMap) => {
  //   const startSize = { widht: shape.widht, height: shape.height };
  //   const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

  //   function onMouseMove(mouseMoveEvent: MouseEvent) {
  //     setSize(currentSize => ({
  //       x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
  //       y: startSize.y - startPosition.y + mouseMoveEvent.pageY
  //     }));
  //   }
  //   function onMouseUp() {
  //     document.body.removeEventListener("mousemove", onMouseMove);
  //     // uncomment the following line if not using `{ once: true }`
  //     // document.body.removeEventListener("mouseup", onMouseUp);
  //   }

  //   document.body.addEventListener("mousemove", onMouseMove);
  //   document.body.addEventListener("mouseup", onMouseUp, { once: true });
  // };

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
