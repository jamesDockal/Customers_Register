import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  height: 100vh;
  width: 67vw;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 75%;
  margin-top: 48px;
`;

export const Header = styled.div`
  background-color: #38b2ac;
  height: 50px;
  margin-bottom: 30px;
  width: 100%;
  padding: 0 16px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

export const RightContent = styled.div`
  height: 100vh;
  width: 33vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #1d4044;
  right: 0;
  position: fixed;
`;

export const Rows = styled.div`
  /* overflow-x: hidden; */
`;
