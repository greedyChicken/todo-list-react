import styled from "styled-components";

export default styled.input`
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
