import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "./styles";
import { Container } from "./styles";
import { InputWrapper } from "./styles";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import Logo from '../../assets/logo.png'

export function SingUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   function handleSingUp() {
    if ( !name|| !email|| !password) {
      alert("Prencha todos os campos!")
    }
    api.post("/users", {name, email, password})
    .then(() => {
        alert("Usuário cadastrado com sucesso!")
    })
    .catch( error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar!")
      }
    })
     
  }

  return(
    <Container>
      <div className="img-wrapper">
          <img alt="logo" src={Logo}/>
        </div>
      <Form>
        <h2>Crie sua conta</h2>
        <InputWrapper>
          <label for="Name">Seu nome</label>
          <Input id="Name" type="text" placeholder="nome" onChange={e => setName(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label for="Email">Email</label>
          <Input id="Email" type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label for="Password">Senha</label>
          <Input id="Password" type="password" placeholder="******" onChange={e => setPassword(e.target.value)}/>
        </InputWrapper>
        <Button title='cadastrar' onClick={handleSingUp}/>
        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )

}