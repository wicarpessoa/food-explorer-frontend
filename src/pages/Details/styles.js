import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-columns:auto;
  grid-template-areas:
    "header"
    "content"
    "footer";
  min-height:100%;
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
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    padding: 36px 56px 56px;

    > button:nth-child(1) {
      font-size: 24px;
      line-height: 140%;
      font-weight: 500;
      align-self: flex-start;
    }
    > button:nth-child(7) {
      display: ${({admin}) => admin ? "flex" : "none"};
    }
   
  
    > img {
      border-radius: 50%;
      width: 264px;
      height: 264px;
      margin: 16px 0;
    }
  
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

  height: 37px;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  > button {
    background-color: transparent;
    align-items: center;
    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
export const ButtonsWrapper = styled.div`
  display: ${({admin}) => admin ? "none" : "flex"};
  flex-direction: row;
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
`;