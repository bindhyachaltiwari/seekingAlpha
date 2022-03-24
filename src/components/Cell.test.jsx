import React from 'react';
import { render, screen } from '@testing-library/react';
import Cell from './Cell';


const CellWrapper = (props) => <table>
  <tbody>
  <tr>{props.children}</tr>
  </tbody>
</table>

describe('Cell', () => {

  test('can render without props', () => {
    render(<CellWrapper><Cell/></CellWrapper>);
    const linkElement = screen.getByRole('cell');
    expect(linkElement).toBeInTheDocument();
  });

  test('receive correct className', () => {
    render(<CellWrapper><Cell className="some"/></CellWrapper>);
    const linkElement = screen.getByRole('cell');
    expect(linkElement.className).toBe('some');
  });
})
