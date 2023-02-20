import styled from "styled-components";

export const Container = styled.div`
display: flex;

height: 114px;
width: 100%;
justify-content: space-between;
background-color:  ${({ theme }) => theme.COLORS.DARK_700};

padding:64px 24px 28px;;

button {
  background-color: transparent;
  color:  ${({ theme }) => theme.COLORS.LIGHT_100};

}

svg {
  color:  ${({ theme }) => theme.COLORS.LIGHT_100};
}

> img {
  object-fit: cover;
  height: 24px;
}
> div {
  position: relative;
  div {
    display: flex;

    position: absolute;
    top: -8px;
    right: -8px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    height: 20px;
    width: 20px;
    z-index:5;

    border-radius: 50%;


    > span {
      font-size:14px;
      margin: auto;
    }
  }
}
`