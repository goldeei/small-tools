import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  className?: string;
}

function ToolContainer({ children, className }: Props) {
  return (
    <StyledToolContainer className={className}>{children}</StyledToolContainer>
  );
}
const StyledToolContainer = styled.div`
  display: grid;
  padding: 0.5rem;
  border: 1px solid black;
`;
export { ToolContainer };
