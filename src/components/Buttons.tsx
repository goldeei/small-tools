import { MouseEventHandler } from "react";

//Button base
interface Button {
	children: React.ReactNode;
	className?: string;
	onClick?: MouseEventHandler;
	width?: number;
}
export const Button = ({ width, className, children, onClick }: Button) => {
	return (
		<div width={width} className={className} onClick={onClick}>
			{children}
		</div>
	);
};
