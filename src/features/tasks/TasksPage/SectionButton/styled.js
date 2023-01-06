import styled from "styled-components";

export const Button = styled.button`
  font-size: 22px;
  border: none;
  color: teal;
  background-color: white;
  margin: 0;
  padding: 0;
  transition: 0.4s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: grey;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
