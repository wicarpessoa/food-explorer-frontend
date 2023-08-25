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

`
export const CarrousselContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
position: relative;
padding-left: 24px;
margin-bottom: 24px;
> h2 {
  margin-bottom: 24px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  text-align: left;

  }
> div:nth-child(2),
  > div:nth-child(3), 
  > div:nth-child(4), 
  > div:nth-child(5) {
    display: none;
  }

@media (min-width: 800px) {
  
  margin-bottom: 48px;
  > h2 {
    font-size: 32px;
    line-height: 140%;
    font-weight: 500;
    margin-bottom: 24px;
  }
  > div:nth-child(2),
  > div:nth-child(3){
    display:flex;
    align-items: center;
    position: absolute;
    bottom:0;
    height: 462px;
    width: 278px;
    z-index:1;
    pointer-events: none;
    
  }

  > div:nth-child(2) {
    background: linear-gradient(-90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }

  > div:nth-child(3) {
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    right: 0px;
    justify-content: flex-end;
    
  }

  > div:nth-child(4),
  > div:nth-child(5) {
    z-index: 2;
    position: absolute;
    > button {
    background-color: transparent;
    > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
  }
  > div:nth-child(4) {
    bottom: 230px;
    left: 16px;
  }
  > div:nth-child(5) {
    right: 16px;
    bottom: 230px;
    > button {
      > svg {
        transform: rotate(180deg);
      }
    }
  }
}
`
export const Carroussel = styled.div`
display: flex;
gap: 16px;
overflow: hidden;
overflow-x: scroll;
width: 100%;
scroll-behavior: smooth;
::-webkit-scrollbar {
  display:none;
}
@media (min-width: 800px) {
position: relative;
padding-left: 0px;
}
`
