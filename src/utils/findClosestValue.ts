/**
 * Finds the closest value in an array to the provided value
 * @param {number[]} arr Array to check against value
 * @param {number} val Number we are looking for the closest value to
 * @returns closest value in the array
 */
export default function closestValue(arr: number[], val: number) {
  return arr.reduce((prev, curr) =>
    Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
  );
}
