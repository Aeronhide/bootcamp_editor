import * as React from "react";
import { DraggableItem } from "./dndComponents";

export function Palette(): JSX.Element {
  return (
    <div className="palette">
      <DraggableItem id="figure1" left={10} top={10} />
      <DraggableItem id="figure2" left={10} top={100} />
      <DraggableItem id="figure3" left={10} top={190} />
    </div>
  );
}


