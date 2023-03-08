import styled from 'styled-components'

export const Container = styled.button`
  width: fit-content;
  Align-items: center;
  justify-content: center;

  background-color:  transparent;
  color:  ${({ theme }) => theme.COLORS.LIGHT_300};



  :hover {
    color:  ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`