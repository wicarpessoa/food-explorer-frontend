import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100vh;

> .img-wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 0 auto;
    max-width:428px;
    padding: 0 50px;
    margin: 160px auto 72px;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width:428px;
  padding: 0 50px;
  margin: 0 auto;

  gap:32px;

  

  > a {
    color:  ${({ theme }) => theme.COLORS.LIGHT_100};
    align-self: center;
    font-size: 14px;
    font-weight: 500;

    :hover {
         color:  ${({ theme }) => theme.COLORS.LIGHT_500};
}
  }
  
`

export const InputWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;

gap: 8px;
`