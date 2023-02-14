import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface Icon {
	animate?: boolean;
}

export const Checkmark = ({ animate }: Icon) => {
	return (
		<i icon={faCheck} className={animate ? "animated" : ""} />
	);
};

export const Close = ({ animate }: Icon) => {
	return <i icon={faXmark} className={animate ? "animated" : ""} />;
};
