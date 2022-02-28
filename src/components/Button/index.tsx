import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: string;
}

const Button: React.FC<Props> = ({ backgroundColor, children, ...rest }) => {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
