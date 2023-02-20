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
    color:  ${({ theme }) => theme.COLORS.LIGHT_100};
    
    height: 48px;
    outline: none;

    padding: 0 16px;

    font-size: 16px;
    

    ::placeholder {
      color:  ${({ theme }) => theme.COLORS.LIGHT_500};
    }
   
    
  }
  svg {
    color:  ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  
`