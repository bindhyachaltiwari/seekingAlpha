import { MouseEventHandler } from 'react';

type Dispatch<A> = (value: A) => void;

export type Cell = number
export type Row = Cell[]
export type Grid = Row[]

export type VoidFunc = <T>(args?: T) => void

export interface PanelProps {
  started: boolean,
  toggle: MouseEventHandler,
}

export interface RowProps {
  data: Row
}

export interface CellProps {
  className: string
}

export interface TableProps {
  gridData: Grid
}