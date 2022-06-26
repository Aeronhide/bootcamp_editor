export interface ShapeItem {
  id?: string
  left?: number
  top?: number
  shape?: string
  width?: number
  height?: number
  scale?: number
  zIndex?: number
  editing?: boolean
}

export interface ShapeItemRequired {
  id: string
  left: number
  top: number
  shape: string
  width: number
  height: number
  scale: number
  zIndex: number
  editing: boolean
}

export type ShapeMap = Record<string, ShapeMapObj>

export interface ShapeMapObj {
  top: number;
  left: number;
  shape: string;
  width: number;
  height: number;
  scale: number;
  zIndex: number;
  editing: boolean;
}
