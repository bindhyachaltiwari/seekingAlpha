import { useCallback, useEffect, useState } from 'react';
import { fillGrid } from '../utils';
import { Grid, Row } from '../types';

export default function useLife(width: number, height: number) {
  const [grid, setGrid] = useState<Grid>([]);

  const countNeighbors = (x: number, y: number) => {
    return (
      get(x - 1, y - 1) +
      get(x - 1, y) +
      get(x - 1, y + 1) +
      get(x, y - 1) +
      get(x, y + 1) +
      get(x + 1, y - 1) +
      get(x + 1, y) +
      get(x + 1, y + 1)
    );
  }

  function nextStep(): void {
    const grid: Grid = [];
    for (let x = 0; x < width; x++) {
      const row: Row = [];
      for (let y = 0; y < height; y++) {
        const neighbors = countNeighbors(x, y);
        if (get(x, y)) {
          if (neighbors < 2) {
            row.push(0);
          } else if (neighbors < 4) {
            row.push(1);
          } else {
            row.push(0);
          }
        } else if (neighbors === 3) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      grid.push(row);
    }

    setGrid(grid);
  }

  function get(x: number, y: number, r: Row = grid[x]): number {
    return r ? r[y] || 0 : 0;
  }

  const reset = useCallback(() => {setGrid(fillGrid(width, height))}, [width,
                                                                       height])

  useEffect(() => {reset()}, [width,
                              height,
                              reset]);

  return { reset, grid, nextStep };
}
