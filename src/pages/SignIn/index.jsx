import { Link } from "react-router-dom";

import { Form } from "./styles";
import { Container } from "./styles";
import { InputWrapper } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import Logo from '../../assets/logo.png'
import { useState } from "react";

export function SingIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {signIn} = useAuth()

  function handleSignIn() {
    signIn({email,password})
  }
  return (
    <Container>
      <div className="img-wrapper">
        <img alt="logo" src={Logo} />
      </div>
      <Form>
        <h2>Faça login</h2>
        <InputWrapper>
          <label for="Email">Email</label>
          <Input id="Email" type="email" placeholder="email" onChange={e=> setEmail(e.target.value)}/>
        </InputWrapper>
        <InputWrapper>
          <label for="Password">Senha</label>
          <Input id="Password" type="password" placeholder="******" onChange={e=> setPassword(e.target.value)}/>
        </InputWrapper>
        <Button title='entrar' onClick={handleSignIn} />
        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  )

}