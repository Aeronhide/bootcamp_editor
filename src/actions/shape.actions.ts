import { ShapeMap } from "../components/interfaces";
import { TypeKeys } from "../constants/actionTypes";

export type TestAction = { type: typeof TypeKeys.ADD_SHAPE_TO_WORKSPACE; payload: ShapeMap }

export function TestAction(payload: ShapeMap): TestAction {
  return { type: TypeKeys.ADD_SHAPE_TO_WORKSPACE, payload };
}
