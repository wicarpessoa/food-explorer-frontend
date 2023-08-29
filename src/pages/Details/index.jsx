import { useState, useEffect } from "react";

import { Container, TagsContainer, ButtonsWrapper, Counter } from "./styles";
import { TextButton } from "../../components/TextButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Minus, Plus, Receipt } from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";

export function Details() {
  const [data, setData] = useState(null)
  const [img, setImgFile] = useState(null)

  const navigate = useNavigate();
  const {isAdmin} = useAuth()

  const params = useParams()
  function handleGoBack() {
    navigate(-1)
  }

  function handleNavigateToEdit(id){
    navigate(`/edit/${id}`)
  }

  useEffect(()=> {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`)
      setData(response.data)
      const img_url = response.data.img_url
      const img = `${api.defaults.baseURL}/files/${img_url}` 
      setImgFile(img)
    } 
    fetchFood()
  }, [img])

 

  return (
    <Container admin={isAdmin}>
      <Header admin={isAdmin} />
      <main>
     {data && 
     <>
     <TextButton title="< Voltar" onClick={handleGoBack} />
        <div>
          <img src={img} />
          <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <TagsContainer>
              {data.ingredients.map((tag,i) => {
                return (
                  <Tag key={String(i)} title={tag.name} />
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
            <Button title="Editar prato" onClick={()=> handleNavigateToEdit(params.id)} />
          </div>
        </div>
        </>
      }
      </main>
      <Footer />
    </Container>
  );
}
