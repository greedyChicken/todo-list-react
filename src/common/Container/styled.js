import styled from "styled-components";

export const Container = styled.main`
  margin: 10px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;

  @media (max-width: 767px) {
    max-width: 98%;
    margin: 0 auto;
  }
`;
