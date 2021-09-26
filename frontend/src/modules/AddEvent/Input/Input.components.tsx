import colors from "@src/common/styles/colors";
import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 56px;

  border: none;
  border-bottom: 1px solid ${colors.navy};
  &:focus,
  &:active {
    outline: none;
  }

  cursor: pointer;
`;

export const Error = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;

  color: ${colors.pink};

  margin-top: 8px;
`;
