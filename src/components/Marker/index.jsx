import { Container } from "./styles";
import { X, Plus } from "phosphor-react";

export function Marker({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input value={value} readOnly={!isNew} {...rest} />
      <button type="button" onClick={onClick}>
        {isNew ? <Plus /> : <X />}
      </button>
    </Container>
  );
}
