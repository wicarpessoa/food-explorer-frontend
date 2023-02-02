import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display:flex;
  gap: 12px;

  Align-items: center;

  background-color:  ${({ theme }) => theme.COLORS.DARK_900};
  color:  ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 8px;
  :focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > input {
    width: 100%;
    background-color: transparent;
    height: 48px;
    color:  ${({ theme }) => theme.COLORS.LIGHT_100};
    outline: none;

    ::placeholder {
      color:  ${({ theme }) => theme.COLORS.LIGHT_500};
    }
   
    
  }
  svg {
    color:  ${({ theme }) => theme.COLORS.LIGHT_500};
    margin-left: 14px;
    }
  }
  
`