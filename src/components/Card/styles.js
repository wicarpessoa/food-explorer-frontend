import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;

  align-items: center;
  justify-content: center;
  min-width: 210px;
  height: 290px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  padding: 24px;

  border-radius: 8px;
  > button:first-child {
    position: absolute;
    right: 16px;
    top: 16px;

    background-color: transparent;
    border: none;

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
  > button:nth-child(2) {
    position: absolute;
    right: 16px;
    top: 16px;

    background-color: transparent;
    border: none;

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
  >button:nth-child(3) {
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
  }
  > img {
    border-radius: 50%;
    width: 88px;
    height: 88px;
    object-fit: cover;
  }

  > button {
    height: 24px;
  }

   > p {
    display: none;

  }
  > span {
    font-size: 16px;
    font-family: "Roboto", serif;
    text-align: center;
    line-height: 16px;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
  @media (min-width: 800px) {
    width: 304px;
    min-width: 304px;
    height: 462px;
    justify-content: center;
    gap: 15px;
  > img {
    border-radius: 50%;
    width: 176px;
    height: 176px;
  }
  > span {
    font-size: 32px;
    line-height: 160%;
  }
  >button:nth-child(3) {
    font-size: 24px;
    line-height: 140%;
    font-weight: 500;
  }
  > p {
    display: block;
    font-size: 12px;
    line-height: 160%;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    white-space: pre-wrap;
  }
  }
`;

export const Counter = styled.div`
  display: flex;
  gap: 16px;

  justify-content: center;

  height: 32px;

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
  display: ${({admin}) => admin ? "none": "flex"};

  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: center;
  > button {
    height: 32px;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    width: 208px;
    > button {
    height: 48px;
  }
  }
`;
