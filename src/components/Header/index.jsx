import { Container } from "./styles";
import { List,Receipt } from 'phosphor-react'
import Logo from '../../assets/logo.png'


export function Header() {
 return( 
  <Container>
    <button>

    <List size={24} />
    </button>
    <img src={Logo} />
    <div>
      <button>
      <div><span>0</span></div>
      <Receipt size={24}/>
      </button>
    </div>
  </Container>)
}