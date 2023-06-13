import { Container } from "./styles";

export function Input({icon:Icon, dark = true,...rest}){
  return (
    <Container dark={dark}>
      {Icon && <Icon size={20} />}
      <input {...rest}/>
    </Container>
  )
}