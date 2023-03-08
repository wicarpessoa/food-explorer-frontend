import {  HeaderContainer,Container,Sidebar, SidebarHeader, SidebarContent } from "./styles";
import { List,Receipt, X } from 'phosphor-react'
import Logo from '../../assets/logo.png'
import { useState } from "react";


export function Header({admin}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
 return( 
  <Container>

  <HeaderContainer admin={admin}>
    <button>

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
  <Sidebar>
    <SidebarHeader>
      <button>
      <X size={18} />
      </button>
      <h3>Menu</h3>
    </SidebarHeader>
    <SidebarContent></SidebarContent>
  </Sidebar>
  </Container>
  )
}