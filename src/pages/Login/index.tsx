import React from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import {
  Container,
  LeftContent,
  LoginForm,
  RightContent,
  Title,
  PasswordInput,
  ButtonText,
} from "./styles";

const Login: React.FC = ({}) => {
  const handleSubmit = async (data: any) => {};

  return (
    <Container onSubmit={handleSubmit}>
      <LeftContent />:
      <RightContent>
        <LoginForm>
          <Title>Login</Title>
          <Input label="Email" icon={AiOutlineMail} name="email" />

          <PasswordInput>
            <Input
              label="Senha"
              icon={RiLockPasswordLine}
              type="password"
              name="password"
            />
          </PasswordInput>

          <Button backgroundColor="#1D4044" type="submit">
            <ButtonText>Sign In</ButtonText>
          </Button>
        </LoginForm>
      </RightContent>
    </Container>
  );
};

export default Login;
