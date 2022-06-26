import { render, screen, fireEvent } from '@testing-library/react';
import { Shape } from '../components/Shape';

describe("Shape", () => {
  test('renders one shape on document', async () => {
    render(<Shape shapeType='square' scale={1} setEditing={() => { }} editing={false} />);
    const shapes = await screen.findByTestId(/shape/i);
    expect(shapes).toBeInTheDocument();
  });

  test('call editing function function', () => {
    const handleDoubleClick = jest.fn();
    const shape = render(<Shape shapeType='square' scale={1} setEditing={handleDoubleClick} editing={false} />);
    fireEvent.doubleClick(shape.getByTestId('shape'));
    expect(handleDoubleClick).toHaveBeenCalledTimes(1);
  });

  test('change editing & scale & shapeType prop', () => {
    const shape = render(<Shape shapeType='circle' scale={2} setEditing={(editing) => !editing} editing={true} />);
    expect(shape.getByTestId('shape')).toHaveAttribute('style', 'transform: scale(2); border: 1px dashed #0000ff;');
    expect(shape.getByTestId('shape')).toHaveClass('circle');
  });
})
