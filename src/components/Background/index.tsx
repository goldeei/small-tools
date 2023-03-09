import { useEffect, useState, useRef, RefObject } from "react";
import { motion } from "framer-motion";

import styles from "./background.module.css";

const duration = (duration: { [key: string]: number }, unit?: string) => {
  const minDuration = unit === "sec" ? duration.min : duration.min * 1000;
  const maxDuration = unit === "sec" ? duration.max : duration.max * 1000;
  return Math.random() * maxDuration + minDuration;
};

function Background() {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const moveDuration = { min: 15, max: 20 };
  const [elements, setElements] = useState([
    {
      key: 1,
      x: Math.floor(Math.random() * 400 + 100),
      y: Math.floor(Math.random() * 400 + 100),
      duration: duration(moveDuration, "sec"),
      scale: Math.floor(Math.random() * 4 + 1),
      transition: {},
    },
    {
      key: 2,
      x: Math.floor(Math.random() * 400 + 100),
      y: Math.floor(Math.random() * 400 + 100),
      duration: duration(moveDuration, "sec"),
      scale: Math.floor(Math.random() * 4 + 1),
      transition: {},
    },
    {
      key: 3,
      x: Math.floor(Math.random() * 400 + 100),
      y: Math.floor(Math.random() * 400 + 100),
      duration: duration(moveDuration, "sec"),
      scale: Math.floor(Math.random() * 4 + 1),
      transition: {},
    },
    {
      key: 4,
      x: Math.floor(Math.random() * 400 + 100),
      y: Math.floor(Math.random() * 400 + 100),
      duration: duration(moveDuration, "sec"),
      scale: Math.floor(Math.random() * 4 + 1),
      transition: {},
    },
  ]);

  useEffect(() => {
    setContainerSize({
      width: containerRef.current?.clientWidth ?? 0,
      height: containerRef.current?.clientHeight ?? 0,
    });
    setElements((prevElements) =>
      prevElements.map((element) => ({
        ...element,
        transition: {
          duration: duration(moveDuration, "sec"),
        },
      }))
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContainerSize({
        width: containerRef.current?.clientWidth ?? 0,
        height: containerRef.current?.clientHeight ?? 0,
      });
      setElements((prevElements) =>
        prevElements.map((element) => ({
          ...element,
          transition: {
            duration: duration(moveDuration, "sec"),
          },
        }))
      );
    }, duration(moveDuration) * 1.5);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log(containerSize);
  }, [containerSize]);

  return (
    <div
      id="background-container"
      ref={containerRef}
      className={styles.container}
    >
      {elements.map((element) => (
        <motion.div
          key={element.key}
          className={styles.circle}
          style={{
            scale: element.scale,
          }}
          initial={{ x: element.x, y: element.y }}
          animate={{
            x: Math.floor(Math.random() * containerSize.width),
            y: Math.floor(Math.random() * containerSize.height),
          }}
          transition={element.transition}
        />
      ))}
      <div className={styles.glass}></div>
    </div>
  );
}

export default Background;
