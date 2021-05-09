/**
 * getArrayRange - Create and array of numbers between two values.
 * @param min
 * @param max
 */
export const getArrayRange = (min: number, max: number): Array<number> => Array(max - min + 1).fill(undefined).map((_, i) => min + i);
