import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: string;
  size?: "md" | "lg";
}

const Button: React.FC<Props> = ({
  backgroundColor,
  children,
  size = "lg",
  ...rest
}) => {
  return (
    <Container backgroundColor={backgroundColor} size={size} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
