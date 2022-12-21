import styled from "styled-components";

export const Main = styled.main`
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;

  @media (max-width: 767px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;
