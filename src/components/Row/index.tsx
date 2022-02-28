import React from "react";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  function handleEdit(id: string) {
    history.push(`/customers/edit/${id}`);
  }

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
        <Edit onClick={() => handleEdit(customer.id)}>
          <AiFillEdit color="#FFF5F5" size={20} />
        </Edit>
      </Functions>
    </Container>
  );
};

export default Row;
