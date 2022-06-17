import { ShapeMap } from "../components/interfaces"
import { TypeKeys } from "../constants/actionTypes"

interface ShapesAction {
  type: TypeKeys.ADD_SHAPE_TO_WORKSPACE,
  payload: ShapeMap
}

interface ShapesState extends ShapeMap { }

export function shapesReducer(state: ShapesState, action: ShapesAction) {
  const { ADD_SHAPE_TO_WORKSPACE } = TypeKeys
  const { type, payload } = action

  switch (type) {
    case ADD_SHAPE_TO_WORKSPACE:
      return {
        ...state,
        ...payload
      }
    default:
      return state || {}
  }
}
