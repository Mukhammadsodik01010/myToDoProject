import { styled } from "styled-components";

export const PopInput = styled.input`
  margin-right: 20px;
  margin-left: 20px;
  height: 40px;
  width: 500px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Truculenta", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #0c429e;
  outline: none;
  border: 2px solid #0c429e;
  border-radius: 5px;
  &::placeholder {
    color: grey;
  }
`;

export const PopButtonDiv = styled.div`
  margin: 100px 20px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
