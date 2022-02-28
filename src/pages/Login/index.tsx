import React, { useRef } from "react";

import * as Yup from "yup";
import { FormHandles } from "@unform/core";

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
import { useToast } from "../../Context/toastContext";
import { useAuth } from "../../Context/authContext";
import { useHistory } from "react-router-dom";

interface Errors {
  [key: string]: string;
}

type Data = {
  email: string;
  password: string;
};

const Login: React.FC = ({}) => {
  const formRef = useRef<FormHandles>(null);

  const { createToast, removeToast } = useToast();
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = async (data: Data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email é Obrigatorio!")
          .email("Formato do email inválido"),
        password: Yup.string()
          .required("Senha é Obrigatorio!")
          .min(4, "A senha deve ter no mínimo 4 caracteres!"),
      });

      await schema.validate(data, { abortEarly: false });

      createToast("Carregando...", "loading");

      await signIn(data);

      removeToast();

      history.push("/home");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: Errors = {};
        error.inner.forEach((error: Yup.ValidationError) => {
          validationErrors[error.path!] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
        removeToast();
        return createToast(error.errors[0], "error");
      }
    }
  };

  return (
    <Container onSubmit={handleSubmit} ref={formRef}>
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
