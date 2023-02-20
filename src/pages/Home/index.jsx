import { Container, Carroussel, Main, Heading } from "./styles";

import { Card } from "../../components/Card/Index";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import HeadingImg from '../../assets/headingImg.png'
import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate = useNavigate();
  function handleNavigate(id) {
    navigate(`/details/${id}`)
  }
  return (
    <Container>
      <Header/>
      <Main>
        <Heading>
          <img src={HeadingImg}/>
          <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
    
          </div>
        </Heading>
      <Carroussel>
        <Card onHandleDetails={handleNavigate}/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Carroussel>
      </Main>
      <Footer/>
    </Container>
  )
}