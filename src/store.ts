import { configureStore } from '@reduxjs/toolkit'
import { shapesReducer } from './reducers/shapes.reducer'
export const store = configureStore({
  reducer: {
    shapesReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
