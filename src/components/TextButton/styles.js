import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  display:flex;

  Align-items: center;
  justify-content: center;

  background-color:  transparent;
  color:  ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 14px;
  line-height: 14px;
  font-weight: 500;

  :hover {
    color:  ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`