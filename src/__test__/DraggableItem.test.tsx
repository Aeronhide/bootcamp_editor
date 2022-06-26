import { render, screen, fireEvent } from '@testing-library/react';
import { DraggableItem } from '../components/dndComponents/DraggableItem'
import { ShapesTypes as ST } from '../constants/shapesTypes';
import { AppDndWrapper } from './ComponentsWrapper';

describe('DraggableItem', () => {
  const { container } = render(AppDndWrapper(<DraggableItem shape={ST.SQUARE} />))

  it('must render and contain one shape component', () => {
    expect(container).toBeInTheDocument()
    const shape = container.getElementsByClassName('shape')
    expect(shape.length).toBe(1)
  })

  it('must have draggable attribute', () => {
    render(AppDndWrapper(<DraggableItem shape={ST.SQUARE} />))
    const dragSource = screen.getByTitle('dragSource')
    expect(dragSource).toHaveAttribute('draggable')
  })

})
