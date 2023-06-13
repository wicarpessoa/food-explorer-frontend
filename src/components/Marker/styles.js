import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  padding:8px 16px;
  height: auto;
  flex-wrap: wrap;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ isNew, theme }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500} ` : "none"};

 

  > input {
    max-width: 70px;

    font-size: 16px;
    font-family: "Roboto", sans-serif;

    background-color: transparent;
    border: none;
    $:input:focus {
         outline: ${({ isNew,theme }) => isNew ? `1px solid ${theme.COLORS.LIGHT_500}` :"none"};
    }
    color: ${({ theme }) => theme.COLORS.LIGHT_100};


    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  > button {
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 :theme.COLORS.LIGHT_100};
    size: 24px;
    border: none;
    background-color:transparent ;
  }
`;
