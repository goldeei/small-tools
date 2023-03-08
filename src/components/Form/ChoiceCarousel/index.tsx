import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Radio from "../Radio";
import { rotateByDirection } from "@/assets/animations";
import { LeftCaret, RightCaret } from "@/components/Icons";
import styles from "./choice-carousel.module.css";
import { rotateArray } from "@/utils";

function CarouselChoice({ id, name, options, className, onChange }: Radio) {
  const [isValue, setValue] = useState<string | number>(options[0]);
  const [isIndex, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const rotateSelection = (amount: number) => {
    setDirection(amount < 0 ? -1 : 1);
    setIndex(rotateArray(options, isIndex, amount));
  };

  useEffect(() => {
    setValue(options[isIndex]);
  }, [isIndex]);

  return (
    <div id={id} className={`${styles.wrapper} ${className}`}>
      <Radio
        parentId={id}
        name={name}
        options={options}
        value={isValue}
        hidden={true}
        onChange={onChange}
      />
      <div className={styles.container}>
        <button type="button" onClick={() => rotateSelection(-1)}>
          <LeftCaret />
        </button>
        <div className={styles.optionWrapper}>
          <AnimatePresence custom={direction} mode="sync" initial={false}>
            {options.map((option, idx) => {
              if (idx === isIndex) {
                return (
                  <motion.div
                    key={`option__${idx}`}
                    className={`${styles.option} bg-${option.toLowerCase()}`}
                    custom={direction}
                    variants={rotateByDirection}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.5,
                      type: "tween",
                    }}
                  >
                    {option}
                  </motion.div>
                );
              }
            })}
          </AnimatePresence>
        </div>
        <button type="button" onClick={() => rotateSelection(1)}>
          <div>
            <RightCaret />
          </div>
        </button>
      </div>
    </div>
  );
}

export default CarouselChoice;
