import React from 'react';
import { CellProps } from '../types';

const Cell: React.FC<CellProps> = ({ className }) => (<td className={className}/>)

export default React.memo(Cell)