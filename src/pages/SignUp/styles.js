import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100vh;

> .img-wrapper {
    display: flex;
    align-items: center;
    max-width:428px;
    margin: 160px auto 72px;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    > .img-wrapper {
      margin: 0 auto;
      padding: 0;
      transform: translateY(-70px);

    }
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
    line-height: 24px;

    :hover {
         color:  ${({ theme }) => theme.COLORS.LIGHT_500};
      }
  } 
  > h2 {
    display: none;
  }
  @media (min-width: 700px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 64px;
    border-radius:16px;
    > h2 {
      display: inline;
      font-size: 32px;
      text-align: center;
      font-weight: 500;
      line-height: 140%;
    }
  }
`

export const InputWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;

gap: 8px;

> label {
  line-height: 100%;
}
`