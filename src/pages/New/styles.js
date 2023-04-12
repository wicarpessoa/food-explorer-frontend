import styled from "styled-components";
export const Container = styled.div`
display: grid;
width: 100%;
height: 100vh;
grid-template-rows: 114px auto 77px;
  grid-template-columns:auto;
  grid-template-areas:
    "header"
    "content"
    "footer";
>div:first-child{
    grid-area: header;
}
>div:nth-child(3){
    grid-area: footer;
}
>main {
    grid-area: content;
    display: flex;
    flex-direction: column;
    padding: 0 32px;
    
}
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    > label {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        color:${({ theme }) => theme.COLORS.LIGHT_400};

        margin-bottom: 16px;;
    }

`

export const InputFile = styled.div`
display:flex;
width: 100%;
height: 48px;
background-color: ${({ theme }) => theme.COLORS.DARK_800};
border-radius: 8px;
>label {
    display: flex;
    gap: 8px;
    align-items: center;

    height: 100%;
    width: 100%;
    cursor: pointer;
    > svg {
        margin-left: 32px;
    } 
    >input {
        display: none;
    }
}
`