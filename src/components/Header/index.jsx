import {  HeaderContainer,Container,Sidebar, SidebarHeader, SidebarContent } from "./styles";
import { List,Receipt, X,MagnifyingGlass, SignOut } from 'phosphor-react'
import Logo from '../../assets/logo.png'
import { useState } from "react";
import {Footer} from '../Footer'
import {Input} from "../Input"
import {TextButton} from "../TextButton"
import { Button } from "../Button";
export function Header({admin}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  function handleSideBarToggle() {
    setSidebarOpen((prevState) => !prevState)
    console.log(sidebarOpen)
  }
 return( 
  <Container>

  <HeaderContainer admin={false}>
    <button onClick={handleSideBarToggle}>
    <List size={24} />
    </button>
    <div>
    <img src={Logo} />
    <span>admin</span>
    </div>
    <Input placeholder="wicar" icon={MagnifyingGlass}/>
    <Button title="Pedidos (0)" icon={Receipt}/>
    <div>
      <button>
      <div><span>0</span></div>
      <Receipt size={24}/>
      </button>
    </div>
    <button>
      <SignOut size={24}/>
    </button>
  </HeaderContainer>
  <Sidebar open={sidebarOpen}>
    <SidebarHeader>
      <button>
      <X size={18}  onClick={handleSideBarToggle}/>
      </button>
      <h3>Menu</h3>
    </SidebarHeader>
    <SidebarContent admin={admin}>
      <Input placeholder="Busque por pratos ou ingredientes" icon={MagnifyingGlass}/>
      <div>
        <TextButton title="sair" />
      </div>
      <div>
         <TextButton title="Novo prato" />
      </div>
    </SidebarContent>
  <Footer/>
  </Sidebar>
  </Container>
  )
}