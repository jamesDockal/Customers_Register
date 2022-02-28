import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

export const Container = styled.button<Props>`
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  text-align: center;
  padding: 12px 0px;
  border-radius: 6px;
  border: none;

  &:hover {
    filter: opacity(0.9);
  }
`;
