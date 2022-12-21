import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  max-width: 40%;
  padding: 0;

  @media (max-width: 767px) {
    max-width: 90%;
    flex-direction: column;
    margin: 0 auto;
    padding: 40px 0;
  }
`;

export const Button = styled.button`
  font-size: 22px;
  border: none;
  color: teal;
  background-color: white;
  margin: auto;
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
