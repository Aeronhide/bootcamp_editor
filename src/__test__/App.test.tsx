import { render, fireEvent, createEvent } from '@testing-library/react';
import { App } from '../App';
import { AppDndWrapper } from './ComponentsWrapper';

describe('App', () => {

  function dragAndDrop(src: Element, dst: Element) {
    fireEvent.dragStart(src);
    fireEvent.dragEnter(dst);
    fireEvent.drop(dst);
  }

  it('must handle drag and change canvas elements count', () => {
    const component = render(AppDndWrapper(<App />))
    const dragSource = component.getAllByTitle('dragSource')
    const dropSource = component.getByTitle('dropSource')
    expect(dropSource.childElementCount).toBe(0)
    dragAndDrop(dragSource[0], dropSource)
    expect(dropSource.childElementCount).toBe(1)
  })

})
