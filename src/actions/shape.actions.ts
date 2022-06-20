import { ids } from "webpack";
import { ShapeMap, ShapeItem } from "../components/interfaces";
import { TypeKeys } from "../constants/actionTypes";

export type AddActionPayload = { type: string; payload: ShapeMap }
export type UpdateActionPayload = {
  type: string; payload: { id: string, scale: number, zIndex: number }
}

export type UpdateShapeActionType = { id: string, scale: number, zIndex: number }

export function AddToWorkSpaceAction(payload: ShapeMap): AddActionPayload {
  return { type: TypeKeys.ADD_SHAPE_TO_WORKSPACE, payload };
}

export function UpdateShapeAction(payload: UpdateShapeActionType): UpdateActionPayload {
  return { type: TypeKeys.UPDATE_SHAPE_OPTIONS, payload };
}
