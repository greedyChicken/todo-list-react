import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  background-color: white;
  margin-bottom: 15px;
`;

export const SectionHeader = styled.header`
  font-size: 28px;
  margin: 0;
  padding: 30px;
  border-bottom: 2px solid #e9e9e9f0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    font-size: 24px;
    padding-left: 7.5%;
    padding-right: 7.5%;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 24px;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export const SectionBody = styled.div`
  padding: 30px;
`;
