import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  font-weight: 400;
  border-bottom: 2px solid #e9e9e9f0;
  margin: 20px 0;
  display: flex;
  gap: 15px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  margin: auto;
  word-break: break-word;
  flex-grow: 1;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  padding: 0;
  transition: 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ToggleDoneButton = styled(Button)`
  background-color: rgb(62, 172, 62);
`;

export const RemoveButton = styled(Button)`
  background-color: red;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: teal;
`;
