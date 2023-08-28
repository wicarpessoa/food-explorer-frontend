import { Container, TagsContainer, ButtonsWrapper, Counter } from "./styles";
import { TextButton } from "../../components/TextButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Tag } from "../../components/Tag";

import Salad from "../../assets/salad.png";
import { Minus, Plus, Receipt } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
const tagsList = ["macarrao", "arroz", "peixe"]

export function Details() {
  const navigate = useNavigate();
  const {isAdmin} = useAuth()
  function handleGoBack() {
    navigate(-1)
  }
  return (
    <Container admin={isAdmin}>
      <Header admin={isAdmin} />
      <main>

        <TextButton title="< Voltar" onClick={handleGoBack} />
        <div>
          <img src={Salad} />
          <div>
            <h2>Salada Ravanelho</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <TagsContainer>
              {tagsList.map((tag) => {
                return (
                  <Tag title={tag} />
                )
              })}

            </TagsContainer>
            <ButtonsWrapper admin={isAdmin}>
              <Counter>
                <button>
                  <Minus size={24} />
                </button>
                <span>01</span>

                <button>
                  <Plus size={24} />
                </button>
              </Counter>
              <Button title="pedir ∙ R$ 25,00" icon={Receipt} />
            </ButtonsWrapper>
            <Button title="Editar prato" />
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
