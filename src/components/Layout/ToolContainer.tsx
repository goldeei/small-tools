import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function ToolContainer({ children }: Props) {
  return <StyledToolContainer>{children}</StyledToolContainer>;
}
const StyledToolContainer = styled.div`
  display: grid;
  border: 1px solid black;
`;
export { ToolContainer };
