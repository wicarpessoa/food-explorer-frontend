import { Container, Carroussel, Main, Heading } from "./styles";

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
      <Carroussel>
        <div>
          <button>
          <CaretLeft size={28} />
          </button>
        </div>
        <div>
          <button>
          <CaretLeft size={28} />
          </button>
        </div>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
        <Card admin={admin} onHandleDetails={handleNavigate}/>
      </Carroussel>
      </Main>
      <Footer/>
    </Container>
  )
}