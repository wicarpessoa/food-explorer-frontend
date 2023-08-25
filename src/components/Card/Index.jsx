import { Container, Counter, ButtonsWrapper } from "./styles";
import Salad from "../../assets/salad.png";
import { TextButton } from "../TextButton";
import { Button } from "../Button";
import { Minus, Plus, Heart, PencilSimple } from "phosphor-react";

export function Card({ onHandleDetails, admin=false, description, img_url, title, price }) {

  return (
    <Container admin={admin}>
      <button>
        {admin ? (
          <PencilSimple size={24} />
          ) : (
          <Heart size={24} />
        )}
      </button>
      <img src={img_url} />
      <TextButton title={`${title} >`} onClick={onHandleDetails} />
      <p>{description}</p>
      <span>{price}</span>
      <ButtonsWrapper admin={admin}>
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
