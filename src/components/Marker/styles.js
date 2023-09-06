import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  padding:8px 16px;
  height: 32px;
  flex-wrap: wrap;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ isNew, theme }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500} ` : "none"};

 

  > input {
    max-width: 70px;
    height:16px;
    font-size: 16px;
    line-height:100%;
    font-family: "Roboto", sans-serif;

    background-color: transparent;
    border: none;

    $:input:focus {
         outline: ${({ isNew,theme }) => isNew ? `1px solid ${theme.COLORS.LIGHT_500}` :"none"};
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};


    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  > button {
    height: 16px;
    width: 16px;
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 :theme.COLORS.LIGHT_100};
    size: 8px;
    border: none;
    background-color:transparent ;
    > svg {
      font-size:16px;
    }
  }
`;
