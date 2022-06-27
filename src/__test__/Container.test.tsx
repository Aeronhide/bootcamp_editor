import { render } from '@testing-library/react';
import { Container } from '../components/Container';
import { AppDndWrapper } from './ComponentsWrapper';

describe('Container', () => {

  it('must be rendered', () => {
    const { container } = render(AppDndWrapper(<Container />))
    expect(container).toBeInTheDocument()
  })

  it('must contain Palette and Workspace components', () => {
    const component = render(AppDndWrapper(<Container />))
    const palette = component.getByTitle('palette')
    const workspace = component.getByTitle('dropSource')
    expect(component.baseElement).toContainElement(palette)
    expect(component.baseElement).toContainElement(workspace)
  })
})
