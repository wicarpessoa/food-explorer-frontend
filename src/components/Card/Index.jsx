import { Container, Counter, ButtonsWrapper } from "./styles";
import Salad from "../../assets/salad.png";
import { TextButton } from "../TextButton";
import { Button } from "../Button";
import { Minus, Plus, Heart, PencilSimple } from "phosphor-react";

export function Card({ onHandleDetails }) {
  const user = true;

  return (
    <Container>
      <button>
        {user ? (
          <Heart size={24} />
        ) : (
          <PencilSimple size={24} />
        )}
      </button>
      <img src={Salad} />
      <TextButton title="Salada ravanelho >" onClick={onHandleDetails} />
      <span>R$ 79,97</span>
      <ButtonsWrapper>
        <Counter>
          <button>
            <Minus size={18} />
          </button>
          <span>01</span>

          <button>
            <Plus size={18} />
          </button>
        </Counter>
        <Button title="incluir" />
      </ButtonsWrapper>
    </Container>
  );
}
