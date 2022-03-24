const randomCell = () => Math.round(Math.random());

const fillGrid = (width: number, height: number, fill: () => number = randomCell) => Array
  .from({ length: width },
    () => Array.from({ length: height }, fill));

export { randomCell, fillGrid }