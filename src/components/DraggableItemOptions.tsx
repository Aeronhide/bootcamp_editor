import * as React from 'react'
import { useDispatch } from 'react-redux'
import { UpdateShapeAction } from '../actions/shape.actions';

interface DraggableItemOptionsProps {
  id: string,
  scale: number,
  zIndex: number
}

export function DraggableItemOptions(props: DraggableItemOptionsProps): JSX.Element {
  let { id, scale, zIndex } = props;
  const dispatch = useDispatch();

  const expandShape = () => {
    dispatch(UpdateShapeAction({ id, scale: scale += 0.1, zIndex }))
  }

  const shrinkShape = () => {
    dispatch(UpdateShapeAction({ id, scale: scale -= 0.1, zIndex }))
  }

  const bringFrontShape = () => {
    dispatch(UpdateShapeAction({ id, scale, zIndex: zIndex += 1 }))
  }

  const sendBackShape = () => {
    if (zIndex === 0) return dispatch(UpdateShapeAction({ id, scale, zIndex: 0 }))

    dispatch(UpdateShapeAction({ id, scale, zIndex: zIndex -= 1 }))
  }

  return (
    <div className="options">
      <div className="options_single">
        <label>Scale</label>
        <div>
          <button className='btn' onClick={shrinkShape}>-</button>
          <span style={{ padding: '0 10px' }}>{scale.toFixed(1)}</span>
          <button className='btn' onClick={expandShape}>+</button>
        </div>
      </div>
      <div className="options_single">
        <label>Z-index</label>
        <div>
          <button className='btn text-small' onClick={bringFrontShape}>Bring front</button>
          <button className='btn text-small' onClick={sendBackShape}>Send back</button>
        </div>
      </div>
    </div>
  );
}


