import styled from "styled-components"
import { breakpoints } from "../CommonStyle"
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  ${breakpoints.tablet} {
    max-width: 700px;
  }
  ${breakpoints.desktop} {
    max-width: 1440px;
  }
`;
