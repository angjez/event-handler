import colors from "@src/common/styles/colors";
import { media } from "@src/common/styles/mixins";
import styled from "styled-components";

const TABLET_MARGIN = 40;
const MOBILE_MARGIN = 12;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;

  border-radius: 10px;

  background-color: ${colors.white};
  border-top: 2px solid ${colors.navy};
  box-shadow: 0px 8px 10px ${colors.shadow};

  padding: 40px;

  ${media.only("TABLET")` 
    width: 100%;
    margin: ${TABLET_MARGIN}px;
    height: calc(var(--vh, 1vh) * 100 - ${2 * TABLET_MARGIN}px);
  `}

  ${media.down("MOBILE")`
    width: 100%;
    margin: ${MOBILE_MARGIN}px;
    min-height: calc(var(--vh, 1vh) * 100 - ${2 * MOBILE_MARGIN}px);
    height: auto;
  `}
`;

export const Header = styled.h1`
  font-weight: 700;
  font-size: 40px;

  color: ${colors.navy};
`;
