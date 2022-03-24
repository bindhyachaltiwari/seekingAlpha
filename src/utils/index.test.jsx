import { fillGrid, randomCell } from './index';


describe('Utils', () => {

  test('randomCell should be boolean', () => {
    expect(randomCell() % 1).toBe(0);
    expect(randomCell()).toBeLessThanOrEqual(1);
  });

  test('  fillGrid should return an array of array of given length', () => {
    const width = 5
    const height = 5
    const grid = fillGrid(width, height);
    expect(grid).toHaveLength(width)
    expect(grid[4]).toHaveLength(height)
  });
})
