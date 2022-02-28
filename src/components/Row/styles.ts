import styled from "styled-components";

export const Container = styled.div`
  background-color: #e6fffa;
  margin-bottom: 8px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  padding: 0 16px;

  height: 42px;
  border-radius: 32px;
  width: 100%;
  border: 2px solid #e6fffa;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Title = styled.div`
  color: #1d4044;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Functions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Delete = styled.div`
  height: 30px;
  width: 30px;
  background-color: #e53e3e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    filter: opacity(0.9);
  }
`;

export const Edit = styled.div`
  height: 30px;
  width: 30px;
  background-color: #ed8936;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    filter: opacity(0.9);
  }
`;
