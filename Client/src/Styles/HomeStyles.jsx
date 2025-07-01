import styled from "styled-components";


export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
     margin-top: 100px;
`
export const LogoImage = styled.img`
    height: 50px;
`
export const ToDo = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-weight: 600;
  font-size: 32px;
  /* line-height: 100%; */
  font-weight: bold;
  color: #252525;
`;
export const ToDoinput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 50px;
  font-size: 20px;
  outline: none;
  border: 2px solid #0c429e;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  color: #3792c6;
  &::placeholder {
    color: #c3c1e5;
    font-family: "Truculenta", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: grey;
  }
`;
export const ImgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImgDivimg = styled.img`
    width: 80%;
    height: 500px;
`
export const ChildDiv = styled.div`
    display: flex;
    width: 700px;
    justify-content: space-between;
    padding: 20px;
    margin-top: 20px;
    &:hover{
        background-color: #ced1d740;
        color: #0c429e;
        border-radius: 10px 10px 0 0;
    }
`
export const ChildScrollDiv = styled.div`
    height: 500px;
    margin-top: 20px;
    overflow-y: auto;
`

export const ChildInsideDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
export const NoteName = styled.p`
    font-family: "Truculenta", sans-serif;
    font-size: 26px;
    font-weight: 400;
`
export const LineHr = styled.hr`
    height: 3px;
    background-color: #0c429e;
`
export const PlusButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 70%;
    margin-top: 30px;
`