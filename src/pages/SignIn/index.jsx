import { Link } from "react-router-dom";

import { Form } from "./styles";
import { Container } from "./styles";
import { InputWrapper } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import Logo from '../../assets/logo.png'

export function SingIn() {
  return(
    <Container>
      <div className="img-wrapper">
          <img alt="logo" src={Logo}/>
        </div>
      <Form>
        <h2>Faça login</h2>
        <InputWrapper>
          <label for="Email">Email</label>
          <Input id="Email" type="email" placeholder="email"/>
        </InputWrapper>
        <InputWrapper>
          <label for="Password">Senha</label>
          <Input id="Password" type="password" placeholder="******"/>
        </InputWrapper>
        <Button title='entrar'/>
        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  )

}