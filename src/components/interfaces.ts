export interface ShapeItem {
  id: string
  left: number
  top: number
}

export interface ShapeMap {
  [key: string]: { top: number; left: number; }
}
