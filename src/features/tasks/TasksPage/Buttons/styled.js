import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  max-width: 40%;
  padding: 0;

  @media (max-width: 767px) {
    max-width: 100%;
    flex-direction: column;
    margin: 0 auto;
    padding: 30px 0 10px;
  }
`;
