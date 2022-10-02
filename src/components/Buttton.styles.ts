import styled, { css } from "styled-components";
export type ButtonVariant = "primary" | "secondary" | "danger" | "sucess";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  sucess: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 40px;
  width: 100px;
  border: 0;
  border-radius: 4px;
  margin: 8px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme["green-500"]};

  /* ${(props) =>
    css`
      background-color: ${buttonVariants[props.variant]};
    `} */
`;
