import styled from "styled-components";

export const Container = styled.div`
display: ${({display}) => display ? "flex" : "none"};
flex-direction: column;
height: 60vh;
margin-bottom: 8px;
> h1 {
  line-height: 140%;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 32px;
    color: #E1E1E6;
}
`
export const CartItemContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
overflow-y: auto;
padding-right: 12px; 
margin-bottom: 12px;
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export const CartItem = styled.div`
  display:flex;
  height: 104px;
  width: 100%;
  gap: 16px;
  justify-content: center;
  align-items:center;
`

export const CartItemContent = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  > button:nth-child(2) {
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color:  ${({ theme }) => theme.COLORS.TOMATO_400};
    line-height: 160%;
  }
`

export const CartItemText = styled.div`
  display: flex;
  gap:12px;

  font-size: 20px;
  line-height: 160%;
  font-weight: 500;
  color: #E1E1E6;
  white-space: nowrap;
  >span:first-child {
    font-size: 20px;
    color:  ${({ theme }) => theme.COLORS.LIGHT_300};
    line-height: 160%;
  }
  > span:nth-child(2) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color:  ${({ theme }) => theme.COLORS.LIGHT_400};
    line-height: 160%;

  }
`

export const CartItemImg = styled.img `
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
`
