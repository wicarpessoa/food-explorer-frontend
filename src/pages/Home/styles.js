import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
min-width: 100%;
height: 100vh;

align-items: center;
justify-content: center;
`
export const Main = styled.div`
display: flex;
flex-direction: column;
flex: 1;
width: 100%;
overflow-x: auto;
`
export const Heading = styled.div`
display: flex;
height: 120px;
max-width: 480px;
background-image: linear-gradient(180deg, #091E26 0%, #00131C 100%);
position: relative;
margin: 40px 16px 62px 30px;
justify-content: flex-end;
> img {
  position: absolute;
  bottom: 0;
  left: -30px;
}
> div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 202px;
  
  margin: 36px 24px 22px 0; 
  h2  {
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  white-space: nowrap;
}
 p {
  font-size: 12px;
}
}
`

export const Carroussel = styled.div`
display: flex;
gap: 16px;
overflow-x: scroll;
width: 100%;
padding-left: 24px;
::-webkit-scrollbar {
  display:none;
}
`