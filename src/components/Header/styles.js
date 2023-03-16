import styled, { keyframes } from "styled-components";

const sidebarAnimation =  keyframes`
0% {display: none, translateX(-100%)}
50% {display: grid, translateX(-100%)}
100% {display: grid, translateX(0%)}
`

export const Container =styled.div`
display: flex;
flex-direction: column;
width: 100%;
position: relative;
`

export const HeaderContainer = styled.div`
display: flex;

height: 114px;
width: 100%;
justify-content: space-between;
background-color:  ${({ theme }) => theme.COLORS.DARK_700};

padding:64px 24px 28px;

button {
  background-color: transparent;
  color:  ${({ theme }) => theme.COLORS.LIGHT_100};

}

svg {
  color:  ${({ theme }) => theme.COLORS.LIGHT_100};
}
div:nth-child(2) {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  > img {
    object-fit: cover;
    height: 24px;
  }
  > span{ 
    color:  ${({ theme }) => theme.COLORS.CAKE_200};
    display: ${({admin}) => admin ? "inline" : "none"};;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
  
  }
}
> div:nth-child(3) {
  position: relative;
  display:${({admin}) => admin ? "none" : "block"};
  div {
    display: flex;

    position: absolute;
    top: -8px;
    right: -8px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    height: 20px;
    width: 20px;
    z-index:1;

    border-radius: 50%;


    > span {
      font-size:14px;
      margin: auto;
    }
  }
}
`

export const Sidebar = styled.div`
display:${({open}) => open ? "grid": "none"};
grid-template-rows: 114px auto 77px;
  grid-template-areas:
    "header"
    "content"
    "footer";
z-index: 2;
position:fixed;
height: 100vh;
width: 100%; 
top: 0;
left: 0;
background-color:${({ theme }) => theme.COLORS.DARK_400};
@keyframes sidebarAnimation {
  from { transform:translateX(-100%)}
  to { transform:translateX(0%)}
  /* 100% {display: grid;transform: translateX(0%)} */
}
animation-name: sidebarAnimation;
animation-duration: 500ms;
`

export const SidebarHeader = styled.div`
grid-area: "header";
display: flex;
gap:16px;
height: 114px;
width: 100%;

align-items: center;
background-color:  ${({ theme }) => theme.COLORS.DARK_700};

padding:64px 24px 28px;
 > button {
   display: flex;
   align-items: center;
  background: none;
  color:${({ theme }) => theme.COLORS.LIGHT_100};
 }
 > h3  {
  font-family: 'Roboto', serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
}
`
export const SidebarContent = styled.div`
grid-area: "content";
padding: 36px 28px;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
>div:first-child {
  margin-bottom: 36px;
}
>div:nth-child(3) {
  display: ${({admin}) => admin ? "flex": "none" };;
}
> div:nth-child(1n + 2) {
  height: 54px;
  width: 100%;
  border-bottom: 1px solid #192227;
  padding: 10px;
  button {
  height: 34px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 140%;
  
  
  
  color: #E1E1E6;
  }
}
`

