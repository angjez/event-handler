import colors from "@src/common/styles/colors";
import styled, { css } from "styled-components";

const input = () => css`
  height: 56px;
  border: none;
  border-bottom: 1px solid ${colors.navy};
  &:focus,
  &:active {
    outline: none;
  }

  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInput = styled.input`
  ${input()}
`;

export const Error = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;

  color: ${colors.pink};

  margin-top: 8px;
`;

export const MultiInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledMultiInput = styled.input`
  ${input()}
  margin: 0px 10px;
  text-align: center;
`;
