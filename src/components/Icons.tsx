import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface Icon {
	animate?: boolean;
}

const Icon = styled(FontAwesomeIcon)``;

export const Checkmark = ({ animate }: Icon) => {
	return (
		<StyledCheckmark icon={faCheck} className={animate ? "animated" : ""} />
	);
};
const StyledCheckmark = styled(Icon)``;

export const Close = ({ animate }: Icon) => {
	return <StyledClose icon={faXmark} className={animate ? "animated" : ""} />;
};
const StyledClose = styled(Icon)``;
