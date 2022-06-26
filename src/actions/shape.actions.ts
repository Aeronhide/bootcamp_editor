import { ShapeMap, ShapeItem } from "../components/interfaces";
import { TypeKeys } from "../constants/actionTypes";
import { store } from "../store";

export type AddActionPayload = { type: string; payload: ShapeMap }

export type UpdateActionPayload = {
  type: string; payload: { id: string, scale: number, zIndex: number }
}

export type SetEditActionPayload = {
  type: string; payload: { id: string, editing: boolean }
}

export type UpdateShapeActionType = { id: string, scale: number, zIndex: number }

export type SetEditShapeActionType = { id: string, editing: boolean }


export function AddToWorkSpaceAction(payload: ShapeMap): AddActionPayload {
  return { type: TypeKeys.ADD_SHAPE_TO_WORKSPACE, payload };
}

export function UpdateShapeAction(payload: UpdateShapeActionType): UpdateActionPayload {
  return { type: TypeKeys.UPDATE_SHAPE_OPTIONS, payload };
}

export function SetEditShapeAction(payload: SetEditShapeActionType): SetEditActionPayload {
  store.dispatch(ResetEditShapesAction())
  return { type: TypeKeys.SET_EDIT_SHAPE_OPTIONS, payload };
}

export function ResetEditShapesAction() {
  return { type: TypeKeys.RESET_EDIT_SHAPES_OPTIONS };
}
