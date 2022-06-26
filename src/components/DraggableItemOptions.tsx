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

  const expandShape = React.useCallback(() => {
    dispatch(UpdateShapeAction({ id, scale: scale += 0.1, zIndex }))
  }, [scale])

  const shrinkShape = React.useCallback(() => {
    dispatch(UpdateShapeAction({ id, scale: scale -= 0.1, zIndex }))
  }, [scale])

  const bringFrontShape = React.useCallback(() => {
    dispatch(UpdateShapeAction({ id, scale, zIndex: zIndex += 1 }))
  }, [zIndex])

  const sendBackShape = React.useCallback(() => {
    if (zIndex === 0) return dispatch(UpdateShapeAction({ id, scale, zIndex: 0 }))

    dispatch(UpdateShapeAction({ id, scale, zIndex: zIndex -= 1 }))
  }, [zIndex])

  return (
    <div className="options">
      <div className="options_single">
        <label>Scale</label>
        <div>
          <button className='btn' title='shrinkShape' onClick={shrinkShape}>-</button>
          <span style={{ padding: '0 10px' }} title="scaleBox">{scale.toFixed(1)}</span>
          <button className='btn' onClick={expandShape}>+</button>
        </div>
      </div>
      <div className="options_single">
        <label>Z-index</label>
        <div style={{ display: 'flex' }}>
          <button className='btn text-small' title="bringFrontShape" onClick={bringFrontShape}>Bring front</button>
          <p className="options_single_z_index">{zIndex.toFixed(0)}</p>
          <button className='btn text-small' onClick={sendBackShape}>Send back</button>
        </div>
      </div>
    </div>
  );
}


