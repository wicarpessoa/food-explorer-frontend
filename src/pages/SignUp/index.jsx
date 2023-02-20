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
        <InputWrapper>
          <label>Seu nome</label>
          <Input type="text" placeholder="nome"/>
        </InputWrapper>
        <InputWrapper>
          <label>Email</label>
          <Input type="email" placeholder="email"/>
        </InputWrapper>
        <InputWrapper>
          <label>Senha</label>
          <Input type="password" placeholder="******"/>
        </InputWrapper>
        <Button title='entrar'/>
        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )

}