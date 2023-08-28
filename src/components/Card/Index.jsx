import { useEffect, useState } from "react";
import { Container, Counter, ButtonsWrapper } from "./styles";
import { TextButton } from "../TextButton";
import { Button } from "../Button";

import { Minus, Plus, Heart, PencilSimple , ForkKnife  } from "phosphor-react";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Card({ onHandleDetails, admin=false, description, img_url, title, price }) {
  const [imgFile, setImgFile] = useState(null)


  
  useEffect(()=> {
    async function fetchImg() {
      if (img_url) {
        const img = `${api.defaults.baseURL}/files/${img_url}` 
        setImgFile(img)
      }
    }
    fetchImg()
  },[img_url])
  return (
    <Container admin={admin}>
        {admin ? (
          <button onClick={onHandleDetails}>
            <PencilSimple size={24} />
          </button>
          ) : (
            <button>
              <Heart size={24} />
            </button>
        )}
      {img_url ? <img src={imgFile} /> : <ForkKnife size={120}/>}
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
