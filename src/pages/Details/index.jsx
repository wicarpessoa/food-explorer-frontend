import { Container, TagsContainer, ButtonsWrapper,Counter } from "./styles";
import { TextButton } from "../../components/TextButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Tag } from "../../components/Tag";

import Salad from "../../assets/salad.png";
import { Minus, Plus, Receipt  } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function Details({admin=false}) {
  const navigate = useNavigate();
  function handleGoBack() {
    navigate(-1)
  }
  return (
    <Container>
      <Header admin={admin}/>
      <main>

      <TextButton title="< Voltar" onClick={handleGoBack} />
      <img src={Salad} />
      <h2>Salada Ravanelho</h2>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
      <TagsContainer>
        <Tag title={"macarrao"} />
        <Tag title={"agua"} />
        <Tag title={"jabuticaba"} />
        <Tag title={"arroz"} />
        <Tag title={"arroz"} />
        <Tag title={"arroz"} />
        <Tag title={"arroz"} />
        <Tag title={"arroz"} />
      </TagsContainer>
      <ButtonsWrapper admin={admin}>
        <Counter>
          <button>
            <Minus size={20} />
          </button>
          <span>01</span>

          <button>
            <Plus size={20} />
          </button>
        </Counter>
        <Button title="pedir ∙ R$ 25,00" icon={Receipt} />
      </ButtonsWrapper>
      <Button title="Editar prato" />
      </main>
      <Footer/>
    </Container>
  );
}
