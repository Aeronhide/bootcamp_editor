export interface ShapeItem {
  id?: string
  left?: number
  top?: number
  shape: string
  width?: number
  height?: number
  scale?: number
  zIndex?: number
}

export interface ShapeMap {
  [key: string]: {
    top: number;
    left: number;
    shape: string;
    width: number;
    height: number,
    scale: number,
    zIndex: number
  }
}
