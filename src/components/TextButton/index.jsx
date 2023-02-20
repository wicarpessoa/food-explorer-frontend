import { Container } from "./styles";

export function TextButton({title,...rest}){
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  )
}