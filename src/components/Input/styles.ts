import styled from "styled-components";

type InputProps = {
  isErrored: boolean;
};

export const InputElement = styled.input<InputProps>`
  width: 100%;
  background-color: white;
  outline: none;

  border: ${({ isErrored }) =>
    isErrored ? "2px solid #E53E3E" : "2px solid #111111"};

  border-radius: 4px;
  padding: 10px 0px;
  padding-left: 46px;
  color: #2c7a7b;
  font-weight: bold;
`;

export const Label = styled.label`
  position: absolute;
  transition: 0.3s all ease;
  margin-left: 46px;
  color: #2c7a7b;
  font-weight: bold;
`;

export const Container = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  gap: 1em;
  align-items: center;
  position: relative;

  ${InputElement}:valid ~ ${Label},
  ${InputElement}:focus ~ ${Label} {
    transform: translateY(-32px);
    font-size: 0.9rem;
    color: red;
    color: #38b2ac;
  }
`;
