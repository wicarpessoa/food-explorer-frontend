import { useAuth } from "../../hooks/auth";

import {  HeaderContainer,Container,Sidebar, SidebarHeader, SidebarContent } from "./styles";

import { useNavigate } from "react-router-dom";

import { List,Receipt, X,MagnifyingGlass, SignOut } from 'phosphor-react'
import Logo from '../../assets/logo.png'
import { useState } from "react";
import {Footer} from '../Footer'
import {Input} from "../Input"
import {TextButton} from "../TextButton"
import { Button } from "../Button";
export function Header({ onInputChange}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigate = useNavigate(); 

  function handleSideBarToggle() {
    setSidebarOpen((prevState) => !prevState)
    console.log(sidebarOpen)
  }
  function handleNavigate() {
    navigate("/new")
  }
  const { signOut, isAdmin } = useAuth()

  function handleSignOut() {
    navigate("/");
    signOut();
  }
 return( 
  <Container>

  <HeaderContainer admin={isAdmin}>
    <button onClick={handleSideBarToggle}>
    <List size={24} />
    </button>
    <div>
    <img src={Logo} />
    <span>admin</span>
    </div>
    <Input onChange={onInputChange} placeholder="Busque por pratos ou ingredientes" icon={MagnifyingGlass}/>
    <div>
    <Button title="Pedidos(0)" icon={Receipt}/>
    <Button title="Novo Prato" onClick={handleNavigate} />
    </div>
    <div>
      <button>
      <div><span>0</span></div>
      <Receipt size={24}/>
      </button>
      
    </div>
    <button onClick={handleSignOut}>
      <SignOut size={24} />
    </button>
  </HeaderContainer>
  <Sidebar open={sidebarOpen}>
    <SidebarHeader>
      <button>
      <X size={18}  onClick={handleSideBarToggle}/>
      </button>
      <h3>Menu</h3>
    </SidebarHeader>
    <SidebarContent admin={isAdmin}>
      <Input onChange={onInputChange} placeholder="Busque por pratos ou ingredientes" icon={MagnifyingGlass}/>
      <div>
        <TextButton title="sair" onClick={handleSignOut} />
      </div>
      <div>
         <TextButton title="Novo prato" onClick={handleNavigate} />
      </div>
    </SidebarContent>
  <Footer/>
  </Sidebar>
  </Container>
  )
}