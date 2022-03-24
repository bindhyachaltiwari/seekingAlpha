import React from 'react';
import Cell from './Cell';
import '../styles.css'
import { RowProps } from '../types';
import { defaultClassNames } from '../config';

const Row: React.FC<RowProps> = ({ data }) => (
  <tr>
    {data && data.map((y, idx) => {
      const className = y ? defaultClassNames.ON : defaultClassNames.OFF
      return (<Cell className={className} key={idx}/>)
    })}
  </tr>)

export default Row