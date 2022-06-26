import { ShapeMap, ShapeMapObj } from "../components/interfaces"
import { TypeKeys } from "../constants/actionTypes"

interface UpdateAction {
  type: TypeKeys.UPDATE_SHAPE_OPTIONS,
  payload: {
    id: string,
    scale: number,
    zIndex: number
  }
}

interface AddAction {
  type: TypeKeys.ADD_SHAPE_TO_WORKSPACE,
  payload: ShapeMap
}

interface SetEditAction {
  type: TypeKeys.SET_EDIT_SHAPE_OPTIONS,
  payload: {
    id: number,
    editing: boolean
  }
}

interface ResetShapesAction {
  type: TypeKeys.RESET_EDIT_SHAPES_OPTIONS,
}

type ShapesAction = AddAction | UpdateAction | SetEditAction | ResetShapesAction

interface ShapesState {
  shapes: ShapeMap
}

export function shapesReducer(state: ShapesState | undefined = { shapes: {} }, action: ShapesAction): ShapesState {
  const {
    ADD_SHAPE_TO_WORKSPACE,
    UPDATE_SHAPE_OPTIONS,
    SET_EDIT_SHAPE_OPTIONS,
    RESET_EDIT_SHAPES_OPTIONS
  } = TypeKeys

  switch (action.type) {
    case ADD_SHAPE_TO_WORKSPACE:
      return {
        ...state,
        shapes: {
          ...state.shapes,
          ...action.payload
        }
      }

    case UPDATE_SHAPE_OPTIONS:
      const { scale, zIndex } = action.payload
      const updatingShape = state.shapes[action.payload.id]
      if (updatingShape) {
        const updatedShape = { [action.payload.id]: { ...updatingShape, scale, zIndex } }
        const shapes = { ...state.shapes, ...updatedShape }
        return {
          ...state,
          shapes
        }
      }
      return state

    case RESET_EDIT_SHAPES_OPTIONS:
      const updatedShapes: ShapeMap = {}
      Object.keys(state.shapes).map(shapeKey => {
        updatedShapes[shapeKey] = { ...state.shapes[shapeKey], editing: false }
      })
      return {
        ...state,
        shapes: updatedShapes
      }

    case SET_EDIT_SHAPE_OPTIONS:
      const { editing } = action.payload
      const shapeToEdit = state.shapes[action.payload.id]
      if (shapeToEdit) {
        const editingShape = { [action.payload.id]: { ...shapeToEdit, editing } }
        const shapes = { ...state.shapes, ...editingShape }
        return {
          ...state,
          shapes
        }
      }
      return state
    default:
      return state
  }
}
