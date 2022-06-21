import { ShapeItem, ShapeMap } from "../components/interfaces"
import { TypeKeys } from "../constants/actionTypes"


interface ShapesAction {
  type:
  TypeKeys.ADD_SHAPE_TO_WORKSPACE |
  TypeKeys.UPDATE_SHAPE_OPTIONS |
  TypeKeys.SET_EDIT_SHAPE_OPTIONS |
  TypeKeys.RESET_EDIT_SHAPES_OPTIONS
  payload: ShapeMap
}

interface ShapesState extends ShapeMap { }

export function shapesReducer(state: ShapesState, action: ShapesAction) {
  const { type, payload } = action
  const {
    ADD_SHAPE_TO_WORKSPACE,
    UPDATE_SHAPE_OPTIONS,
    SET_EDIT_SHAPE_OPTIONS,
    RESET_EDIT_SHAPES_OPTIONS
  } = TypeKeys

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
    case RESET_EDIT_SHAPES_OPTIONS:
      const updatedState = {}
      Object.keys(state).map(shapeKey => {
        updatedState[shapeKey] = { ...state[shapeKey], editing: false }
      })
      return updatedState

    case SET_EDIT_SHAPE_OPTIONS:
      return {
        ...state,
        [`${payload.id}`]: {
          ...state[`${payload.id}`],
          editing: payload.editing
        }
      }
    default:
      return state || {}
  }
}
