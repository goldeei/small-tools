import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faHome,
  faGear,
  faShapes,
  faXmark,
  faPenToSquare,
  faChevronDown,
  faEllipsisH,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  animate?: boolean;
  direction?: "left" | "right" | "up" | "down";
  orientation?: "vertical" | "horizontal";
}

export const Checkmark = ({ animate }: Props) => {
  return (
    <FontAwesomeIcon icon={faCheck} className={animate ? "animated" : ""} />
  );
};
export const Home = ({ animate }: Props) => {
  return (
    <FontAwesomeIcon icon={faHome} className={animate ? "animated" : ""} />
  );
};
export const Gear = ({ animate }: Props) => {
  return (
    <FontAwesomeIcon icon={faGear} className={animate ? "animated" : ""} />
  );
};
export const Shapes = ({ animate }: Props) => {
  return (
    <FontAwesomeIcon icon={faShapes} className={animate ? "animated" : ""} />
  );
};

export const Close = ({ animate }: Props) => {
  return (
    <FontAwesomeIcon icon={faXmark} className={animate ? "animated" : ""} />
  );
};
export const Edit = ({ animate }: Props) => {
  return (
    <FontAwesomeIcon
      icon={faPenToSquare}
      className={animate ? "animated" : ""}
    />
  );
};
export const DownCaret = ({ animate }: Props) => {
  return (
    <FontAwesomeIcon
      icon={faChevronDown}
      className={animate ? "animated" : ""}
    />
  );
};
export const Ellipses = ({ animate, orientation }: Props) => {
  return (
    <FontAwesomeIcon
      icon={orientation === "vertical" ? faEllipsisV : faEllipsisH}
      className={animate ? "animated" : ""}
    />
  );
};
