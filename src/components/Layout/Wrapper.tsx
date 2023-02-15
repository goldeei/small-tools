import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function Wrapper({ children }: Props) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
const StyledWrapper = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
`;
export { Wrapper };
