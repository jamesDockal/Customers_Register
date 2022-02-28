import styled from "styled-components";

import { Form } from "@unform/web";

export const Container = styled(Form)`
  display: flex;
`;

export const LeftContent = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: #1d4044;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const RightContent = styled.div`
  height: 100vh;
  width: 50vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.div`
  width: 50%;
  max-width: 300px;
  height: 350px;
  border-radius: 16px;
  padding: 64px;
  background-color: #e6fffa;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Title = styled.div`
  text-align: left;
  font-weight: bold;
  color: #1d4044;
  font-size: 2rem;
  margin-bottom: 32px;
`;

export const PasswordInput = styled.div`
  margin-top: 28px;
  margin-bottom: 56px;
`;

export const ButtonText = styled.div`
  color: #e6fffa;
  font-weight: bold;
`;
