import * as React from 'react'
import { useCallback } from 'react'
import type { XYCoord } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AddToWorkSpaceAction, ResetEditShapesAction } from '../actions/shape.actions'
import { ShapesTypes as ST } from '../constants/shapesTypes'
import { DraggableItem } from './dndComponents/DraggableItem'
import { DraggableItemOptions } from './dndComponents/DraggableItemOptions'
import { ShapeItemRequired } from './interfaces'
import { RootState } from '../store';

export function Workspace(): JSX.Element {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state.shapesReducer.shapes);

  const moveShape = useCallback(
    (item: ShapeItemRequired) => {
      const { id, left, top, shape, width, height, scale, zIndex, editing } = item;
      dispatch(AddToWorkSpaceAction({ [id]: { left, top, shape, width, height, scale, zIndex, editing } }))
    },
    [reduxState, AddToWorkSpaceAction],
  )

  const [, drop] = useDrop(
    () => ({
      accept: ST.COMMON,
      drop(item: ShapeItemRequired, monitor) {
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

  const resetEditShapes = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as Element).className === "canvas") return dispatch(ResetEditShapesAction())
  }

  return (
    <div className="workspace">
      <div ref={drop} className="canvas" onClick={resetEditShapes} title="dropSource">
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
      {Object.keys(reduxState).map((shapeKey) => {
        if (reduxState[shapeKey].editing) {
          return (
            <DraggableItemOptions
              key={"options" + shapeKey}
              id={shapeKey}
              scale={reduxState[shapeKey].scale}
              zIndex={reduxState[shapeKey].zIndex}
            />
          )
        }
      })}
    </div>
  );
}


