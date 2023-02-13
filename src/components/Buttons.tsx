import { MouseEventHandler } from "react";
import styled from "styled-components";

//Button base
interface Button {
	children: React.ReactNode;
	className?: string;
	onClick?: MouseEventHandler;
	width?: number;
}
export const Button = ({ width, className, children, onClick }: Button) => {
	return (
		<StyledButton width={width} className={className} onClick={onClick}>
			{children}
		</StyledButton>
	);
};
const StyledButton = styled.button<Button>``;
