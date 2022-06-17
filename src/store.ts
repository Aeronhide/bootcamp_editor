import { configureStore } from '@reduxjs/toolkit'
import { shapesReducer } from './reducers/shapes.reducer'
export const store = configureStore({
  reducer: {
    shapesReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
