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
        <InputWrapper>
          <label>Email</label>
          <Input placeholder="email"/>
        </InputWrapper>
        <InputWrapper>
          <label>Senha</label>
          <Input placeholder="******"/>
        </InputWrapper>
        <Button title='entrar'/>
        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  )

}