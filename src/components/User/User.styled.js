import styled from "styled-components";

export const Text = styled.p`
  color: black;
  font-size: 22px;
  background-color: beige;
  &:hover {
    background-color: violet;
  }
`;
export const NameText = styled.span`
  color: blue;
  background-color: green;
  ${Text} :hover & {
    background-color: pink;
  }
`;
