import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: teal;
  max-width: 1200px;
  height: 70px;
  margin: 0 auto;

  @media (max-width: 767px) {
    max-width: 98%;
    height: 50px;
  }
`;

export const StyledList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  margin: 0 20px;
  list-style: none;
`;
