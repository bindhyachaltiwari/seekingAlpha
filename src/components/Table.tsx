import React from 'react';
import Row from './Row';
import { TableProps } from '../types'

const Table: React.FC<TableProps> = ({ gridData }) => (<table>
    <tbody>
    {gridData.map((x, idx) => (
      <Row key={idx} data={x}/>
    ))}
    </tbody>
  </table>
)

export default Table;