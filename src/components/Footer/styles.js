import styled from "styled-components";

export const Container = styled.div`
display: flex;
height: 77px;
width: 100%;

align-items: center;
justify-content: space-between;
padding: 0 28px;

background-color:  ${({ theme }) => theme.COLORS.DARK_600};

> img {
  height: 18px;
  resize: cotain;
}

> span {
  font-family: "DM sans";
  font-size: 12px;
}
`