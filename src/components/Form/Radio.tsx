import { useEffect, useRef } from "react";

interface Props extends Radio {
  parentId: Radio["id"];
  value: string | number;
  hidden: boolean;
}

function Radio({
  parentId,
  options,
  value,
  name,
  onChange,
  className,
  hidden,
}: Props) {
  const refs: Array<React.RefObject<HTMLInputElement>> = [];
  for (let i = 0; i < options.length; i++) {
    refs[i] = useRef(null);
  }

  useEffect(() => {
    const idx = options.includes(value) ? options.indexOf(value) : -1;
    if (idx !== -1) {
      refs[idx].current?.click();
    }
  }, [value]);
  return (
    <div className={className} hidden={hidden}>
      {options.map((option: string | number, i: number) => {
        return (
          <label
            key={`${parentId}__${option}`}
            htmlFor={`${parentId}__${option}`}
          >
            <input
              ref={refs[i]}
              type="radio"
              id={`${parentId}__${option}`}
              value={option}
              name={name}
              onChange={onChange}
            />
            {option}
          </label>
        );
      })}
    </div>
  );
}

export default Radio;
