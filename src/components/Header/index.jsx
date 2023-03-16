import {  HeaderContainer,Container,Sidebar, SidebarHeader, SidebarContent } from "./styles";
import { List,Receipt, X,MagnifyingGlass } from 'phosphor-react'
import Logo from '../../assets/logo.png'
import { useState } from "react";
import {Footer} from '../Footer'
import {Input} from "../Input"
import {TextButton} from "../TextButton"
export function Header({admin}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  function handleSideBarToggle() {
    setSidebarOpen((prevState) => !prevState)
    console.log(sidebarOpen)
  }
 return( 
  <Container>

  <HeaderContainer admin={admin}>
    <button onClick={handleSideBarToggle}>
    <List size={24} />
    </button>
    <div>
    <img src={Logo} />
    <span>admin</span>
    </div>
    <div>
      <button>
      <div><span>0</span></div>
      <Receipt size={24}/>
      </button>
    </div>
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