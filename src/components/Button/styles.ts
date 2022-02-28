import styled from "styled-components";

interface Props {
  backgroundColor: string;
  size: "md" | "lg";
}

export const Container = styled.button<Props>`
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  text-align: center;
  height: ${({ size }) => (size === "md" ? "40px" : "56px")};
  border-radius: 6px;
  border: none;

  &:hover {
    filter: opacity(0.9);
  }
`;
