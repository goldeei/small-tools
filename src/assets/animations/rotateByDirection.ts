/**
 * Direction required in custom motion element prop (-1, 1)
 * Also provided to AnimatePresence custom prop where applicable
 */
export const rotateByDirection = {
  enter: (direction: -1 | 1) => {
    return {
      x: direction > 0 ? 75 : -75,
    };
  },
  center: {
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 75 : -75,
    };
  },
};
