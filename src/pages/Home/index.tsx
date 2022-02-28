import React, { useEffect, useState } from "react";

import Row from "../../components/Row";
import { BsFillPlusSquareFill } from "react-icons/bs";
import {
  Container,
  Content,
  Header,
  LeftContainer,
  LogOutContainer,
  RightContent,
  Rows,
  Title,
} from "./styles";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { useToast } from "../../Context/toastContext";
import LogOutButton from "../../components/LogOutButton";

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

const Home: React.FC = ({}) => {
  const history = useHistory();
  const { createToast, removeToast } = useToast();

  const [customers, setCustomers] = useState<Customer[]>([]);

  function handleCreateClick() {
    history.push("/customers/create");
  }

  async function handleDelete(id: string) {
    createToast("Deletando...", "loading");
    await api.delete(`/clientes/${id}`);
    removeToast();
    searchCustomers();
  }

  async function searchCustomers() {
    createToast("Buscando...", "loading");
    const { data } = await api.get("/clientes");
    setCustomers(data);
    removeToast();
  }

  useEffect(() => {
    searchCustomers();
  }, []);

  return (
    <Container>
      <LeftContainer>
        <Content>
          <Header>
            <Title>Listagem de Clientes</Title>
            <BsFillPlusSquareFill
              size={28}
              color="#E6FFFA"
              cursor="pointer"
              onClick={handleCreateClick}
            />
          </Header>

          <Rows>
            {customers.map((customer) => (
              <Row
                key={customer.id}
                customer={customer}
                handleDelete={handleDelete}
              />
            ))}
          </Rows>
        </Content>
      </LeftContainer>
      <RightContent>
        <LogOutContainer>
          <LogOutButton />
        </LogOutContainer>
      </RightContent>
    </Container>
  );
};

export default Home;
