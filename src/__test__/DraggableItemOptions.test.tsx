import { render, fireEvent } from '@testing-library/react';
import { DraggableItemOptions } from '../components/dndComponents/DraggableItemOptions';
import { AppDndWrapper } from './ComponentsWrapper';

describe('DraggableItemOptions', () => {

  it('must be rendered', () => {
    const { container } = render(AppDndWrapper(<DraggableItemOptions id='313123123' scale={1} zIndex={10} />))
    expect(container).toBeInTheDocument()
  })

  it('button with title must be clickable', () => {
    const component = render(AppDndWrapper(<DraggableItemOptions id='313123123' scale={1} zIndex={10} />))
    const shrinkBtn = component.getByTitle('shrinkShape')
    fireEvent.click(shrinkBtn)
  })
})
