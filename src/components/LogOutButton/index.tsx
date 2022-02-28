import React from "react";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../../Context/authContext";
import { Container } from "./styles";

const LogOutButton: React.FC = ({}) => {
  const { signOut } = useAuth();

  return (
    <Container onClick={signOut}>
      <MdLogout size={32} color="white" />
    </Container>
  );
};

export default LogOutButton;
