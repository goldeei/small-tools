import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function Wrapper({ children }: Props) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
const StyledWrapper = styled.div`
  width: 1400px;
  max-width: 100%;
  margin: 0 auto;
`;
export { Wrapper };
