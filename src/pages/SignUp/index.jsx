import { Link } from "react-router-dom";

import { Form } from "./styles";
import { Container } from "./styles";
import { InputWrapper } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import Logo from '../../assets/logo.png'

export function SingUp() {
  return(
    <Container>
      <div className="img-wrapper">
          <img alt="logo" src={Logo}/>
        </div>
      <Form>
        <h2>Crie sua conta</h2>
        <InputWrapper>
          <label for="Name">Seu nome</label>
          <Input id="Name" type="text" placeholder="nome"/>
        </InputWrapper>
        <InputWrapper>
          <label for="Email">Email</label>
          <Input id="Email" type="email" placeholder="email"/>
        </InputWrapper>
        <InputWrapper>
          <label for="Password">Senha</label>
          <Input id="Password" type="password" placeholder="******"/>
        </InputWrapper>
        <Button title='entrar'/>
        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )

}