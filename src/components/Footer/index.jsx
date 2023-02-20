import { Container } from "./styles";
import LogoFooter from '../../assets/logoFooter.png'

export function Footer() {
 return( <Container>
    <img src={LogoFooter}/>
    <span>© 2023 - Todos os direitos reservados.</span>
  </Container>)
}