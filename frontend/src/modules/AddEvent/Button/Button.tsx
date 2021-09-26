import {
  Loader,
  StyledButton,
} from "@src/modules/AddEvent/Button/Button.components";
import React, { ComponentPropsWithoutRef, FunctionComponent } from "react";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  isLoading: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  isLoading,
  ...props
}) => (
  <StyledButton isLoading={isLoading} {...props}>
    {isLoading ? <Loader /> : children}
  </StyledButton>
);

export default Button;
