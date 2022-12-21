import styled from "styled-components";

export const FormElement = styled.form`
  display: flex;
  margin: 0;
  padding: 30px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
  }
`;

export const FormInput = styled.input`
  flex-grow: 1;
  font-size: 22px;
  padding: 15px;
  margin-right: 25px;
  border: 2px solid #e9e9e9f0;

  @media (max-width: 767px) {
    width: 85%;
    font-size: 20px;
    padding: 10px;
    margin: 0 0 15px 0;
  }
`;

export const FormButton = styled.button`
  max-width: 350px;
  background-color: teal;
  color: white;
  border: none;
  padding: 10px 10px;
  font-size: 22px;
  transition: 0.4s;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }

  @media (max-width: 767px) {
    max-width: 1000px;
    width: 85%;
    font-size: 20px;
  }
`;
