import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface Icon {
	animate?: boolean;
}

export const Checkmark = ({ animate }: Icon) => {
	return (
		<FontAwesomeIcon icon={faCheck} className={animate ? "animated" : ""} />
	);
};

export const Close = ({ animate }: Icon) => {
	return <FontAwesomeIcon icon={faXmark} className={animate ? "animated" : ""} />;
};
