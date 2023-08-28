import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  display:flex;
  flex-direction: row;
  gap: 12px;

  height: 48px;

  align-items: center !important;
  justify-content: center;

  background-color:  ${({ theme }) => theme.COLORS.TOMATO_100};
  color:  ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 14px;
  font-weight: 500;

  border-radius: 5px;
  :hover {
    background-color:  ${({ theme }) => theme.COLORS.TOMATO_200};
  }
  svg {
    color:  ${({ theme }) => theme.COLORS.LIGHT_500};
    margin-left: 14px;
    }
 
`