import { MouseEventHandler } from "react";
import styled from "styled-components";

//Button base
interface Button {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const Button = ({ width, className, children, onClick }: Button) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
