import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: larger;
  font-weight: 400;
  color: white;

  &.active {
    font-weight: 700;
  }
`;
