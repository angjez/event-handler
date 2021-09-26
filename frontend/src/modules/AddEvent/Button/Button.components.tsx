import colors from "@src/common/styles/colors";
import styled, { keyframes } from "styled-components";

export interface StyledButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
}

export const StyledButton = styled.button.attrs<StyledButtonProps>((p) => ({
  disabled: p.disabled || p.isLoading,
}))<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  width: 100%;
  border-radius: 16px;
  border: none;
  cursor: pointer;

  background-color: ${colors.pink};
  box-shadow: 0px 3px 5px ${colors.shadow};

  margin-top: 40px;

  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${colors.white};

  &:hover {
    background-color: ${colors.hover};
  }
  &:disabled {
    background-color: ${colors.disabled};
    box-shadow: none;
    cursor: not-allowed;
  }
`;

const motion = () => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 25px;
  height: 25px;
  border: 3px solid ${colors.white};
  border-radius: 50%;
  animation: ${motion} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${colors.white} transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;
