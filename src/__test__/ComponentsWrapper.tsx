import { configureStore } from '@reduxjs/toolkit'
import { shapesReducer } from '../reducers/shapes.reducer'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

export const AppDndWrapper = (child: JSX.Element) => {
  const store = configureStore({
    reducer: {
      shapesReducer,
    }
  })

  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend} options={{ enableMouseEvents: true }}>
        {child}
      </DndProvider>
    </Provider>
  )
}
