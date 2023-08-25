import { Container, Carroussel, Main, Heading, CarrousselContainer } from "./styles";

import { Card } from "../../components/Card/Index";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import HeadingImg from '../../assets/headingImg.png'
import { useNavigate } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useRef } from "react";
import { useLayoutEffect } from "react";
export function Home({admin = false}) {
  const navigate = useNavigate();
  
  const [foodsByCategory, setFoodsByCategory] = useState([])

  function handleNavigate(id) {
    navigate(`/details/${id}`)
  }

  function handleScrollRight (e){
    let target = e.currentTarget;
    let parent = target.parentElement;
    let carroussel = parent.nextElementSibling;
    
    carroussel.scrollLeft += 312
  }

  function handleScrollLeft (e){
    let target = e.currentTarget;
    let parent = target.parentElement;
    let nextSibling = parent.nextElementSibling;
    let carroussel = nextSibling.nextElementSibling;

    carroussel.scrollLeft -= 312
  }

  function formatPriceWithTwoDecimals(number) {
    const formattedPrice = (number/100).toFixed(2);
    const formattedNumberWithComma = formattedPrice.replace(".", ",");
    return formattedNumberWithComma;
}


 

  useEffect(()=> {
    async function fetchFoods() {
      const response = await api.get("/foods")
      setFoodsByCategory(response.data)
    }
    fetchFoods()
  }, [])
  return (
    <Container>
      <Header admin={admin}/>
        <Main>
          <Heading>
            <img src={HeadingImg}/>
            <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </Heading>
        { foodsByCategory.map((food, i)=> {
          return(
          <CarrousselContainer key={String(i)}>
          <h2>{food.category_name}</h2>
          <div></div>
          <div></div>
          
          <div>
            <button onClick={e => handleScrollLeft(e)}>
              <CaretLeft size={28} />
            </button>
          </div>
          <div>
            <button onClick={e => handleScrollRight(e)}>
              <CaretLeft size={28} />
            </button>
          </div>
         
         <Carroussel className="carrousel" >
            {food.foods.map((food, i) => {
              const formattedPrice = formatPriceWithTwoDecimals(food.price)
              return (
                <Card 
                    key={String(i)} 
                    admin={admin} 
                    onHandleDetails={handleNavigate} 
                    description={food.description} 
                    title={food.title} 
                    price={`R$ ${formattedPrice}`} 
                    img_url={food.img_url} 
                  />
              )
            })}
         </Carroussel>
         
        </CarrousselContainer>
          )
          })
        }
        </Main>
      <Footer/>
    </Container>
  )
}