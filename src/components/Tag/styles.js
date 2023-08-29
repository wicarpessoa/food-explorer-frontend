import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  border-radius: 5px;
  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;

