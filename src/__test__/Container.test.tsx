import { render, screen, fireEvent } from '@testing-library/react';
import { Container } from '../components/Container';
import { AppDndWrapper } from './ComponentsWrapper';

describe('Container', () => {

  it('must be rendered', () => {
    const { container } = render(AppDndWrapper(<Container />))
    expect(container).toBeInTheDocument()
  })
})
