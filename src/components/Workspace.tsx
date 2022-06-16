import * as React from 'react'
import { useCallback, useState, useEffect, useReducer } from 'react'
import type { XYCoord } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { TypeKeys } from '../constants/actionTypes'
import { shapesReducer } from '../reducers'
import { DraggableItem } from './dndComponents'
import { ShapeItem } from './interfaces'

interface ShapeMap {
  [key: string]: { top: number; left: number; }
}
export function Workspace(): JSX.Element {
  const [reducer, dispatch] = useReducer(shapesReducer, { "0": { top: 0, left: 0 } });

  console.log({ reducer });

  const moveShape = useCallback(
    (id: string, left: number, top: number) => {
      dispatch({ type: TypeKeys.ADD_SHAPE_TO_WORKSPACE, payload: { [id]: { left, top } } })
      // setShapes(
      //   {
      //     ...shapes,
      //     [id]: {
      //       left, top
      //     }
      //   }
      // )
    },
    [reducer, dispatch],
  )

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'square',
      drop(item: ShapeItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveShape(item.id, left, top)
        // addShapeToWorkSpace(item.id)
        return undefined
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
  )

  const addShapeToWorkSpace = (id: string) => {
    console.log(id);
  }

  useEffect(() => {
    console.log(drop);
  })

  return (
    <div className="workspace">
      <div ref={drop} className="canvas" />

      {Object.keys(reducer).map((shapeKey) => {
        const { left, top } = reducer[shapeKey]
        return (
          <DraggableItem
            key={shapeKey}
            id={shapeKey}
            left={left}
            top={top}
          />
        )
      })
      }
    </div>
  );
}


