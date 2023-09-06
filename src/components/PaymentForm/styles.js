import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
  margin-left: 80px;
  > h1 {
    line-height: 140%;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 32px;
    color: #E1E1E6;
  }

@media (max-width: 1300px) {
display: ${({display}) => display ? "none" : "flex"};
margin-left:0;
}
`
export const PaymentFormMethod= styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  border: 1px solid #76797B;
  border-radius: 8px;
  > div:first-child {
    display: flex;
    width: 100%;
    margin-bottom: 32px;
    color: #E1E1E6;
    border-bottom:1px solid #76797B;
    height: 81px;
    border-radius: 8px 8px 0 0;
    > button {
      display: inline-flex;
      flex: 1;
      justify-content: center;
      align-items:center;
      gap: 16px;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      color: #FFFFFF;
    }
    > button:first-child {
      border-right:1px solid #76797B;
      border-radius: 8px 0 0 0;
      background-color: ${({ toggle,theme }) => toggle ? "transparent" : theme.COLORS.DARK_800}
    }
    
    > button:nth-child(2) {
      border-radius:0 8px 0 0;
      background-color: ${({ toggle,theme }) => toggle ? theme.COLORS.DARK_800 : "transparent" }
    }
    
  }
  
  > form  {
    display: ${({ toggle }) => toggle ? "flex" : "none" };
    flex-direction: column;
    height: fit-content;
    padding:56px 90px 48px ;
    gap: 36px;

    input {
      height: 48px;
      border: 1px solid #FFFFFF;
      font-size: 16px;
      line-height: 100%;
      border-radius: 5px;
      width: 100%;
      padding: 16px;
      box-sizing: border-box;
    }
    label {
      margin-bottom: 8px;
      font-size: 16px;
      color: #C4C4CC
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    > div:first-child {
      display: flex;
      flex-direction: column;
      label {
      margin-bottom: 8px;
      font-size: 16px;
      color: #C4C4CC
      }
      > span { 
      font-size: 16px;
      color: #C4C4CC;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) =>  theme.COLORS.TOMATO_100 };
      margin-top:8px
      }
    }
    > div:nth-child(2) {
      display: flex;
      gap:16px;       
      > div {
        display: flex; 
        flex-direction: column; 
      }
    } 
    > button:nth-child(3) {
      > svg {
      color: ${({ theme }) =>  theme.COLORS.LIGHT_100 };
        
      }
    }
  }
  > div:nth-child(3) {
      display: ${({ toggle }) => toggle ? "none" :"flex" };
      width: 100%;
      padding:56px 129px 50px ;
      height: 100%;
      border-bottom: 0px;
      > img {
        width: 270px;
        height: auto;
        object-fit: cover;
      }
  }
  @media (max-width: 1300px) {
      width: 300px;
      
      > form {
        margin-left: 0;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding:20px 30px 30px ;
        height: 100%;
        border-bottom: 0px;
  
      }
      > div:nth-child(3) {
      display: ${({ toggle }) => toggle ? "none" :"flex" };
      justify-content: center;
      align-items: center;
      width: 100%;
      padding:30px 80px 30px ;
      height: 100%;
      border-bottom: 0px;
      > img {
        width: 160px;
        height: 160px;
        object-fit: cover;
      }
    }
  }

` 
