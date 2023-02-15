import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faPenToSquare,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  animate?: boolean;
}

export const Checkmark = ({ animate }: Props) => {
  return (
    <FontAwesomeIcon icon={faCheck} className={animate ? "animated" : ""} />
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
