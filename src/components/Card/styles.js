import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;

  align-items: center;

  min-width: 210px;
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
  > img {
    border-radius: 50%;
    width: 88px;
    height: 88px;
  }

  > button {
    height: 24px;
  }

  > span {
    font-size: 16px;
    font-family: "Roboto", serif;
    line-height: 16px;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;

export const Counter = styled.div`
  display: flex;
  gap: 16px;

  justify-content: center;

  height: 32px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  > button {
    background-color: transparent;
    align-items: center;
    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  > button {
    height: 32px;
  }
`;
