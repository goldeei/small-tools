import { useEffect, useRef } from "react";

/**
 * Set timeout with options to clear
 * @param callback Function to run when duration ends
 * @param duration The duration of the timeout
 * @returns [setTimer, clearTimer]
 */
function useTimeout(
  callback: () => void,
  duration: number
): [() => void, () => void] {
  const timeoutRef = useRef<NodeJS.Timeout>();

  function setTimer() {
    timeoutRef.current = setTimeout(callback, duration);
  }

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  useEffect(() => {
    return clearTimer;
  }, []);

  return [setTimer, clearTimer];
}

export default useTimeout;
