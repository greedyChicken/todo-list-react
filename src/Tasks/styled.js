import styled, { css } from "styled-components";

export const List = styled.ul`
  margin-top: 0;
  padding: 25px 0 5px;
`;

export const Item = styled.li`
  list-style: none;
  font-weight: 400;
  border-bottom: 2px solid #e9e9e9f0;
  margin: 20px 30px;
  padding: 10px;
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

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: rgb(62, 172, 62);
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: red;
    `}
`;
