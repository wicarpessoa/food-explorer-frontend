import { useEffect, useState } from "react";
import { Container, Counter, ButtonsWrapper } from "./styles";
import { TextButton } from "../TextButton";
import { Button } from "../Button";

import { Minus, Plus, Heart, PencilSimple , ForkKnife  } from "phosphor-react";

import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";

export function Card({ onHandleDetails, admin=false, description, img_url, title, price, food_id }) {
  const [imgFile, setImgFile] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const { addCart } = useCart()
  function handleAddCart() {
    setQuantity(prevState => (prevState + 1))
  }

  function handleSubCart() {
    if (quantity > 1) {
      setQuantity(prevState => (prevState - 1))
    }
  } 

  function formatPriceWithTwoDecimals(number) {
    const formattedPrice = (number/100).toFixed(2);
    const formattedNumberWithComma = formattedPrice.replace(".", ",");
    return formattedNumberWithComma;
}
const formattedPrice = formatPriceWithTwoDecimals(price)


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
      <span>{`R$ ${formattedPrice}`}</span>
      <ButtonsWrapper admin={admin}>
        <Counter>
          <button>
            <Minus size={18} onClick={handleSubCart} />
          </button>
          <span>{quantity}</span>

          <button>
            <Plus size={18} onClick={handleAddCart}/>
          </button>
        </Counter>
        <Button title="incluir" onClick={()=>{addCart({quantity, food_id, price})}}/>
      </ButtonsWrapper>
    </Container>
  );
}
