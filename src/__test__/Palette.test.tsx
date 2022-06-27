import { render, screen, fireEvent } from '@testing-library/react';
import { Palette } from '../components/Palette';
import { AppDndWrapper } from './ComponentsWrapper';

describe('Palette', () => {
  it('must contain given count of figures', () => {
    const { container } = render(
      AppDndWrapper(<Palette />)
    );
    const shapes = container.getElementsByClassName('shape');
    expect(shapes.length).toBe(3)
  })

  it('must be equal to snapshot', () => {
    const { container } = render(
      AppDndWrapper(<Palette />)
    );
    expect(container).toMatchSnapshot()
  })
})
