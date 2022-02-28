import React from "react";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useToast } from "../../Context/toastContext";
import api from "../../services/api";

import { Container, Delete, Edit, Functions, Title } from "./styles";

type Customer = {
  id: string;
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

type Props = {
  customer: Customer;
  handleDelete: (id: string) => void;
};

const Row: React.FC<Props> = ({ customer, handleDelete }) => {
  return (
    <Container>
      <Title>{customer.nome}</Title>
      <Title>{customer.cpf}</Title>
      <Title>{customer.email}</Title>
      <Title>{customer.endereco.cidade}</Title>

      <Functions>
        <Delete onClick={() => handleDelete(customer.id)}>
          <AiFillDelete color="#FFF5F5" size={20} />
        </Delete>
        <Edit>
          <AiFillEdit color="#FFF5F5" size={20} />
        </Edit>
      </Functions>
    </Container>
  );
};

export default Row;
