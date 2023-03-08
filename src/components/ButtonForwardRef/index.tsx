import { forwardRef, ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
};

const ButtonContainer = styled.button<ButtonProps>``;

export const ButtonForwardRef = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <ButtonContainer ref={ref} {...props}>
        {children}
      </ButtonContainer>
    );
  }
);
