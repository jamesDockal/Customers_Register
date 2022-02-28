import React, { useRef } from "react";
import { FormHandles } from "@unform/core";
import axios from "axios";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useToast } from "../../../Context/toastContext";
import { RiFileListFill } from "react-icons/ri";
import * as Yup from "yup";
import {
  Container,
  Content,
  FillButton,
  ButtonText,
  FormContainer,
  Header,
  Sidebar,
  SubmitButton,
  Title,
  UserInfo,
} from "./styles";
import api from "../../../services/api";
import { useHistory } from "react-router-dom";

interface Errors {
  [key: string]: string;
}

type Data = {
  cpf: string;
  email: string;
  nome: string;
  endereco: {
    bairro: string;
    cep: string;
    cidade: string;
    numero: string;
    rua: string;
  };
};

const CustomersCreate: React.FC = ({}) => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { createToast, removeToast } = useToast();

  const handleSubmit = async (data: Data) => {
    try {
      console.log("data", data);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome é Obrigatorio!"),
        cpf: Yup.string().required("CPF é Obrigatorio!"),
        email: Yup.string()
          .required("Email é Obrigatorio!")
          .email("Formato do email inválido"),
      });

      await schema.validate(data, { abortEarly: false });

      createToast("Carregando...", "loading");

      await api.post("/clientes", data);

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

  const handleFillAddress = async () => {
    const cep = formRef.current?.getFieldValue("cep");

    if (cep) {
      try {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );

        formRef.current?.setFieldValue("rua", data.logradouro);
        formRef.current?.setFieldValue("bairro", data.bairro);
        formRef.current?.setFieldValue("cidade", data.localidade);
      } catch (error) {
        return createToast("Não foi possivel encontrar o CEP", "error");
      }
    } else {
      formRef.current?.setFieldError("cep", "error");
      return createToast("Você precisa informar o CEP", "error");
    }
  };

  function handleCreateClick() {
    history.push("/home");
  }

  return (
    <Container>
      <Sidebar />

      <Content>
        <FormContainer onSubmit={handleSubmit} ref={formRef}>
          <Header>
            <Title>Listagem de Clientes</Title>
            <RiFileListFill
              size={28}
              color="#E6FFFA"
              cursor="pointer"
              style={{
                marginRight: 8,
              }}
              onClick={handleCreateClick}
            />
          </Header>

          <h2>Dados</h2>
          <UserInfo qnt={3}>
            <Input label="Nome" name="nome" />
            <Input label="Email" name="email" />
            <Input label="CPF" name="cpf" mask="cpf" />
          </UserInfo>

          <h2>Endereço </h2>
          <UserInfo qnt={2}>
            <Input label="CEP" name="endereco.cep" mask="cep" />
            <FillButton>
              <Button
                backgroundColor="#38b2ac"
                size="md"
                onClick={handleFillAddress}
                type="button"
              >
                <ButtonText>Preencher</ButtonText>
              </Button>
            </FillButton>
          </UserInfo>

          <UserInfo
            qnt={4}
            style={{
              marginTop: 16,
            }}
          >
            <Input label="Rua" name="endereco.rua" />
            <Input label="Número" name="endereco.numero" type="number" />
            <Input label="Bairro" name="endereco.bairro" />
            <Input label="Cidade" name="endereco.cidade" />
          </UserInfo>
          <SubmitButton>
            <Button backgroundColor="#68D391" type="submit" size="lg">
              <ButtonText>Salvar</ButtonText>
            </Button>
          </SubmitButton>
        </FormContainer>
      </Content>

      <Sidebar />
    </Container>
  );
};

export default CustomersCreate;
