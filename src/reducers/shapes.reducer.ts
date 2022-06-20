import { ShapeMap } from "../components/interfaces"
import { TypeKeys } from "../constants/actionTypes"


interface ShapesAction {
  type: TypeKeys.ADD_SHAPE_TO_WORKSPACE | TypeKeys.UPDATE_SHAPE_OPTIONS
  payload: ShapeMap
}

interface ShapesState extends ShapeMap { }

export function shapesReducer(state: ShapesState, action: ShapesAction) {
  const { type, payload } = action
  const { ADD_SHAPE_TO_WORKSPACE, UPDATE_SHAPE_OPTIONS } = TypeKeys

  switch (type) {
    case ADD_SHAPE_TO_WORKSPACE:
      return {
        ...state,
        ...payload
      }

    case UPDATE_SHAPE_OPTIONS:
      const { scale, zIndex } = payload
      const newValues = { scale, zIndex }
      return {
        ...state,
        [`${payload.id}`]: {
          ...state[`${payload.id}`],
          ...newValues
        }
      }
    default:
      return state || {}
  }
}
