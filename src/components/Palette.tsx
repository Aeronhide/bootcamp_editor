import * as React from "react";
import { ShapesTypes as ST } from "../constants/shapesTypes";
import { DraggableItem } from "./dndComponents/DraggableItem";

export function Palette(): JSX.Element {
  return (
    <div className="palette">
      <div className="palette_shape_wrapper">
        <DraggableItem shape={ST.SQUARE} />
      </div>
      <div className="palette_shape_wrapper">
        <DraggableItem shape={ST.TRIANGLE} />
      </div>
      <div className="palette_shape_wrapper">
        <DraggableItem shape={ST.CIRCLE} />
      </div>
    </div>
  );
}


