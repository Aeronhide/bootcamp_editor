export interface ShapeItem {
  id: string
  left: number
  top: number
  shape: string
}

export interface ShapeMap {
  [key: string]: { top: number; left: number; shape: string }
}
