import React from 'react';
import { render, screen } from '@testing-library/react';
import Row from './Row';
import { defaultClassNames } from '../config';


const RowWrapper = (props) => <table>
  <tbody>{props.children}</tbody>
</table>

describe('Row', () => {

  test('can render', () => {
    render(<RowWrapper><Row/></RowWrapper>);
    const linkElement = screen.getByRole('row');
    expect(linkElement).toBeInTheDocument();
  });

  test('pass correct class names', () => {
    render(<RowWrapper><Row data={[0,1,1,0]}/></RowWrapper>);
    const {ON: on, OFF: off} = defaultClassNames
    const expectClassNames = [off, on, on, off]
    screen.getAllByRole('cell').forEach((i, idx) => {
      expect(i.className).toBe(expectClassNames[idx]);
    });
  });
})
