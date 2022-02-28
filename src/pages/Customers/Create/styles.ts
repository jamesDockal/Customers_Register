import styled from "styled-components";
import { Form } from "@unform/web";

export const Container = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  background-color: #1d4044;
  height: 100vh;
  width: 12.5vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Content = styled.div`
  height: 100vh;
  width: 75vw;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled(Form)`
  width: 100%;
  max-width: 75%;
  margin-top: 46px;
`;

export const Header = styled.div`
  background-color: #38b2ac;
  height: 55px;
  margin-bottom: 30px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin-left: 8px;
`;

type UserInfoProps = {
  qnt: number;
};

export const UserInfo = styled.div<UserInfoProps>`
  display: grid;
  grid-template-columns: repeat(${({ qnt }) => qnt}, 1fr);
  gap: 16px;
`;

export const FillButton = styled.div`
  margin-top: 12px;
`;

export const ButtonText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

export const SubmitButton = styled.div`
  margin-top: 36px;
`;
