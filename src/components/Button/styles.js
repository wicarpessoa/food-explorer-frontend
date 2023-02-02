import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  display:flex;
  gap: 12px;

  height: 48px;

  Align-items: center;
  justify-content: center;

  background-color:  ${({ theme }) => theme.COLORS.TOMATO_100};
  color:  ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 8px;
  :hover {
    background-color:  ${({ theme }) => theme.COLORS.TOMATO_200};
  }
  svg {
    color:  ${({ theme }) => theme.COLORS.LIGHT_500};
    margin-left: 14px;
    }
  
  
`