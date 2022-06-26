import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App';
import { AppDndWrapper } from './ComponentsWrapper';

describe('App', () => {

  function dragAndDrop(src: Element, dst: Element) {
    fireEvent.dragStart(src);
    fireEvent.dragEnter(dst);
    fireEvent.drop(dst);
  }

  it('must handle drag', () => {
    const component = render(AppDndWrapper(<App />))
    const dragSource = component.getAllByTitle('dragSource')
    const dropSource = component.getByTitle('dropSource')
    dragAndDrop(dragSource[0], dropSource)
  })
})
