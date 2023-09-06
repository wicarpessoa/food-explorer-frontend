import { Container, Carroussel, Main, Heading, CarrousselContainer } from "./styles";
import { Card } from "../../components/Card/Index";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { useNavigate } from "react-router-dom";
import { CaretLeft} from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import HeadingImg from '../../assets/headingImg.png'

export function Home() {
  const navigate = useNavigate();
  const [ search, setSearch] = useState("")
  const [foodsByCategory, setFoodsByCategory] = useState([])

  const {isAdmin} = useAuth();

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

  useEffect(()=> {
    async function fetchFoods() {
      const response = await api.get(`/foods?title=${search}`)
      setFoodsByCategory(response.data)
      console.log(response.data)

    }
    fetchFoods()
  }, [search])
  return (
    <Container>
      <Header admin={isAdmin} onInputChange={ (e) => setSearch(e.target.value) }/>
        <Main>
          <Heading >
            <img src={HeadingImg}/>
            <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </Heading>
        {foodsByCategory && foodsByCategory.map((food, i)=> {
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
              return (
                <Card 
                    key={String(i)} 
                    admin={isAdmin} 
                    onHandleDetails={()=>handleNavigate(food.id)} 
                    description={food.description} 
                    title={food.title} 
                    price={food.price} 
                    img_url={food.img_url} 
                    food_id={food.id}
                    
                  />
              )
            })}
         </Carroussel>
         
        </CarrousselContainer>
          )
          })
        }
        <Cart/>
        </Main>
      <Footer/>
    </Container>
  )
}