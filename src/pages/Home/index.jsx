import { Container, Carroussel, Main, Heading, CarrousselContainer } from "./styles";

import { Card } from "../../components/Card/Index";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import HeadingImg from '../../assets/headingImg.png'
import { useNavigate } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
export function Home({admin = true}) {
  const navigate = useNavigate();
  function handleNavigate(id) {
    navigate(`/details/${id}`)
  }
  function handleScrollRight (e){
    let target = e.currentTarget;
    let parent = target.parentElement;
    let carroussel = parent.nextElementSibling;
    
    carroussel.scrollLeft -= 268
    
  }
  function handleScrollLeft (e){
    let target = e.currentTarget;
    let parent = target.parentElement;
    let nextSibling = parent.nextElementSibling;
    let carroussel = nextSibling.nextElementSibling;

    carroussel.scrollLeft += 268
    
  }
  return (
    <Container>
      <Header admin={admin}/>
      <Main>
        <Heading>
          <img src={HeadingImg}/>
          <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
    
          </div>
        </Heading>
        <CarrousselContainer>
          <h2>Refeições</h2>
        <div>
          <button onClick={e=>handleScrollLeft(e)}>
          <CaretLeft size={28} />
          </button>
        </div>
        <div>
          <button onClick={e => handleScrollRight(e)}>
          <CaretLeft size={28} />
          </button>
        </div>
      <Carroussel>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
      </Carroussel>
        </CarrousselContainer>
      </Main>
      <Footer/>
    </Container>
  )
}