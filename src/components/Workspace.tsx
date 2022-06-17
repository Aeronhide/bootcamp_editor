import * as React from 'react'
import { useCallback, useState, useEffect } from 'react'
import type { XYCoord } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { AddToWorkSpaceAction } from '../actions/shape.actions'
import { ShapesTypes as ST } from '../constants/shapesTypes'
import { store } from '../store'
import { DraggableItem } from './dndComponents/DraggableItem'
import { ShapeItem } from './interfaces'

export function Workspace(): JSX.Element {
  const reduxShapes = store.getState().shapesReducer;
  const dispatch = useDispatch();

  const moveShape = useCallback(
    (id: string, left: number, top: number, shape: string) => {
      dispatch(AddToWorkSpaceAction({ [id]: { left, top, shape } }))
    },
    [reduxShapes, AddToWorkSpaceAction],
  )

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ST.COMMON,
      drop(item: ShapeItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveShape(item.id, left, top, item.shape)
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
  )

  return (
    <div className="workspace">
      <div ref={drop} className="canvas">

        {Object.keys(reduxShapes).map((shapeKey) => {
          const { left, top, shape } = reduxShapes[shapeKey]
          return (
            <DraggableItem
              key={shapeKey}
              id={shapeKey}
              left={left}
              top={top}
              shape={shape}
            />
          )
        })
        }
      </div>
    </div>
  );
}


