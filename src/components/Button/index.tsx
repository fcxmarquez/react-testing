import { ComponentPropsWithRef, FC } from "react";
import styled from "styled-components";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  children: React.ReactNode;
};

const ButtonContainer = styled.button<ButtonProps>``;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};
