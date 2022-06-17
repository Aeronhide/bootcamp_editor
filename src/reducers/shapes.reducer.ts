import { ShapeMap } from "../components/interfaces"
import { TypeKeys } from "../constants/actionTypes"


interface ShapesAction {
  type: TypeKeys.ADD_SHAPE_TO_WORKSPACE | TypeKeys.CHANGE_SHAPE_OPTIONS
  payload: ShapeMap
}

interface ShapesState extends ShapeMap { }

export function shapesReducer(state: ShapesState, action: ShapesAction) {
  const { type, payload } = action
  const { ADD_SHAPE_TO_WORKSPACE, CHANGE_SHAPE_OPTIONS } = TypeKeys

  switch (type) {
    case ADD_SHAPE_TO_WORKSPACE:
      return {
        ...state,
        ...payload
      }

    case CHANGE_SHAPE_OPTIONS:
      return {
        ...state,
        ...payload
      }
    default:
      return state || {}
  }
}
