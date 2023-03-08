/**
 * Rotates through a given array by an amount provided
 * if new index passes array length or 0, jump to beginning or end of array
 * @param arr Array to rotate through
 * @param currIdx Current index of array
 * @param amount Amount to rotate
 * @returns The new index
 */
export default function rotateArray(
  arr: any[],
  currIdx: number,
  amount: number
) {
  const len = arr.length - 1;
  if (currIdx + amount > len) return 0;
  if (currIdx + amount < 0) return len;
  return currIdx + amount;
}
