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




@media (min-width: 800px) {
  padding: 168px 124px 0;
  }
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
  font-family: 'Roboto';
  font-size: 12px;
}
}

@media (min-width: 800px) {
height: 260px;
max-width: 100%;
margin: 0 0 62px;
padding: 90px 100px 90px 0;
> img {
  height: 412px;
  aspect-ratio: video;
  left: -70px;
}
> div {
  width: 100%;
  align-items: flex-end;
  margin: 0;
  h2  {
  font-size: 40px;
  line-height: 140%;
  font-weight: 500;
  white-space: nowrap;
}
 p {
  font-size: 16px;
  line-height: 100%;
  font-weight: 400;
  white-space: nowrap;
  font-family: 'Roboto';

}
}
}
}
`

export const Carroussel = styled.div`
display: flex;
position: relative;
gap: 16px;
overflow-x: scroll;
width: 100%;
padding-left: 24px;
::-webkit-scrollbar {
  display:none;
}
@media (min-width: 800px) {
  > div:nth-child(1),
  > div:nth-child(2){
    display:flex;
    align-items: center;
    
    position: absolute;
    height: 100%;
    width: 278px;
    z-index:1;
    > button {
      background-color: transparent;
      > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }
  > div:nth-child(1) {
    background: linear-gradient(-90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }
  > div:nth-child(2) {
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    right: 0px;
    justify-content: flex-end;
    > button {
      > svg {
        transform: rotate(180deg);
      }
    }
  }
}
`