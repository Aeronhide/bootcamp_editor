import { ShapeMap } from "../components/interfaces";
import { TypeKeys } from "../constants/actionTypes";

export type AddToWorkSpaceType = { type: typeof TypeKeys.ADD_SHAPE_TO_WORKSPACE; payload: ShapeMap }

export function AddToWorkSpaceAction(payload: ShapeMap): AddToWorkSpaceType {
  return { type: TypeKeys.ADD_SHAPE_TO_WORKSPACE, payload };
}
