import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-columns: auto;
  grid-template-areas:
    "header"
    "content"
    "footer";
  min-height:100vh;
  width: 100%;
  > div:nth-child(1) {
    grid-area: header;
  }
  > div:nth-child(3) {
    grid-area: footer;
  }

  > main {
    grid-area: content;
    display: flex;
    flex:1;
    flex-direction: column;
    min-height: 100%;
    width:100%;
    align-items: center;
    padding: 36px 56px 56px;
    margin: 0 auto;
    box-sizing: border-box;
    > button:nth-child(1) {
      font-size: 24px;
      line-height: 140%;
      font-weight: 500;
      align-self: flex-start;
    }
    
   > div {
    display: flex;
    flex-direction:column;
    width: 100%;
      align-items: center;

     > img {
       border-radius: 50%;
       width: 264px;
       height: 264px;
       margin: 16px 0;
     }
      >div {
        display: flex;
        width: 100%;
        flex-direction:column;
        align-items: center;
        >  h2 {
        font-size: 27px;
        font-weight: 500;
        line-height: 140%;
        margin-bottom: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

    }
    > p {
      font-size: 16px;
      font-weight: 400;
      line-height: 140%;
      text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
   
      }
     
    }
  }
  @media (min-width: 800px){
    > main {
      > div {
        
        flex-direction: row;
        gap: 48px;
        margin-top: 48px;
        > img {
          
         border-radius: 50%;
         width: 390px;
         height: 390px;
          margin: 0;
        }
        > div {
          align-items: flex-start;
          > p {
          text-align: left;
          }
          > button:nth-child(5) {
          display: ${({ admin }) => admin ? "inline" : "none"};
          padding: 0 24px;
          width: fit-content;
          }
        }
      }
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 24px 0 48px;
  justify-content:center;
`;

export const Counter = styled.div`
  display: flex;
  gap: 16px;

  justify-content: center;
  align-items: center;
  height: 37px;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  > button {
    background-color: transparent;
    align-items: center;
    height: 24px;
    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    } 
  }
  > span {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
    }
`;
export const ButtonsWrapper = styled.div`
  display: ${({ admin }) => admin ? "none" : "flex"};
  flex-direction: row;
  align-items: center;

  gap: 16px;
  width: 100%;
  > button {
    height: 37px;
    font-size: 10px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100}
    }
  }
  @media (min-width: 800px) {
   
    > button {
      height: 48px;
      width: fit-content;
      padding:0  24px ;
      > svg {
        margin:0
      }
    }
  }
`;