import * as React from "react";
import type { CSSProperties, FC } from "react";
import { memo, useEffect, useState } from "react";
import { Shape } from "../Shape";

const styles: CSSProperties = {
  display: "inline-block",
  opacity: 0
};

export interface DragPreviewProps {
  title: string;
}

export interface DragPreviewState {
  tickTock: any;
}

export const DragPreview: FC<DragPreviewProps> = memo(
  function DragPreview({ title }) {
    const [tickTock, setTickTock] = useState(false);

    useEffect(
      function subscribeToIntervalTick() {
        const interval = setInterval(() => setTickTock(!tickTock), 500);
        return () => clearInterval(interval);
      },
      [tickTock]
    );

    return (
      <div style={styles}>
        <Shape />
      </div>
    );
  }
);
