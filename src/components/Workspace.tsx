import * as React from 'react'
import { useCallback, useState, useEffect } from 'react'
import type { XYCoord } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AddToWorkSpaceAction } from '../actions/shape.actions'
import { ShapesTypes as ST } from '../constants/shapesTypes'
import { store } from '../store'
import { DraggableItem } from './dndComponents/DraggableItem'
import { ShapeItem, ShapeMap } from './interfaces'

export function Workspace(): JSX.Element {
  const reduxShapes = store.getState().shapesReducer;
  const dispatch = useDispatch();
  const reduxState = useSelector((state: any) => state.shapesReducer);

  const moveShape = useCallback(
    (item: ShapeItem) => {
      const { id, left, top, shape, width, height, scale, zIndex } = item;
      dispatch(AddToWorkSpaceAction({ [id]: { left, top, shape, width, height, scale, zIndex } }))
    },
    [reduxShapes, AddToWorkSpaceAction],
  )

  const [, drop] = useDrop(
    () => ({
      accept: ST.COMMON,
      drop(item: ShapeItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveShape({ ...item, left, top })
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
  )

  return (
    <div className="workspace">
      <div ref={drop} className="canvas">

        {Object.keys(reduxState).map((shapeKey) => {
          return (
            <DraggableItem
              key={shapeKey}
              id={shapeKey}
              {...reduxState[shapeKey]}
            />
          )
        })
        }
      </div>
    </div>
  );
}


