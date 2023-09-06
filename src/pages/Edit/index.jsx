import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Marker } from "../../components/Marker";
import { TextButton } from "../../components/TextButton";
import { Container, InputFile, Form, TagsWrapper, ButtonsWrapper, InputWrapper } from "./styles";
import { UploadSimple } from "phosphor-react";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate, useParams } from "react-router-dom";


export function Edit() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const [data, setData] = useState(null)

    const [img, setImg] = useState(null)

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('');

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState([])

    const navigate = useNavigate();

    const params = useParams();

    function handleAddIngredient() {
        setIngredients(prevState=> [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient (deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setImg(file); 
    }

    const handleSelectChange = (event) => {
        setSelectedCategory(event.target.value);
      };
      
      function handleGoBack() {
          navigate(-1)
        }

      async function handleEditFood(event) {
            event.preventDefault()
            try {
                const fileUploadForm = new FormData();
                fileUploadForm.append("img", img);
                await api.patch(`foods/avatar/${params.id}`, fileUploadForm);
                await api.put(`/foods/${params.id}`, {
                    title,
                    category_id: selectedCategory,
                    description,
                    ingredients,
                    price: price*100,
                  })
                    alert("food updated!");
                    navigate(-1);
            } catch(e) {
                alert(e)
                console.log(e)
            }
            }
      async function handleDeleteFood(event) {
        event.preventDefault()
        try {
            await api.delete(`/foods/${params.id}`)
            alert("Prato excluido com sucesso!")
            navigate("/")
        } catch(e) {
            alert("Não foi possível excluir o prato!")
        }
      }  
    useEffect(()=> {
        async function fetchFood() {
          const response = await api.get(`/foods/${params.id}`)
          
          const img_url = response.data.img_url
          
          const fileResponse = await api.get(`/files/${img_url}`, {
            responseType: 'arraybuffer'
          }) 
          //receving img and transforming
          const imgData = new Uint8Array(fileResponse.data )
          const blob = new Blob([imgData], { type: 'image/png' });
          const fileImg = new File([blob], img_url, { type: 'image/png' });
          setImg(fileImg)
          console.log(response.data.price)
          setTitle(response.data.title)
          setDescription(response.data.description)
          setPrice(Number(response.data.price)/100)
          setSelectedCategory(response.data.category_id)

          setIngredients([])
          response.data.ingredients.map(ingredient => {
            setIngredients(prevState=> [...prevState, ingredient.name])
          })
        }
        fetchFood()
      }, [])

      useEffect( () => {
        async function fetchCategories(){
          const response =  await api.get("/categories")
          setCategories(response.data)  
        }
        fetchCategories()
      }, [])
      
    return (
        <Container>
            <Header />
            <main>
                <div>
                <TextButton title='< voltar' onClick={handleGoBack} />
                <h2>Editar prato</h2>

                </div>
                <Form>
                    <div>
                        <InputWrapper>
                            <label > Imagem do prato</label>
                            <InputFile>
                                <label htmlFor="img">
                                    <UploadSimple size={24} />
                                    <span>{img ? img.name : "Selecione a imagem" } </span>
                                    <input type="file" id="img"  onChange={handleChangeAvatar} />
                                </label>
                            </InputFile>
                        </InputWrapper>
                        <InputWrapper>
                            <label >Nome</label>
                            <Input dark={false} value={title} placeholder="Ex: Salada Ceaser" onChange={e => setTitle(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <label >Categoria</label>
                            <select value={selectedCategory} onChange={handleSelectChange}>
                                <option value="" disabled selected>Selecione a categoria</option>
                                {categories.map((category) => {
                                    return <option key={String(category.id)} value={category.id} >{category.name}</option>
                                })}
                            </select>
                        </InputWrapper>
                    </div>
                    <div>
                        <InputWrapper>
                            <label >Ingredientes</label>
                            <TagsWrapper>
                                <Marker placeholder="Adicionar" isNew={true}  value={newIngredient} onChange={e=> setNewIngredient(e.target.value)} onClick={handleAddIngredient} />
                                {ingredients.map((ingredient, i)=> {
                                    return (
                                        <Marker key={String(i)} isNew={false} value={ingredient} onClick={() => handleRemoveIngredient(ingredient)} />
                                    )
                                })}
                            </TagsWrapper>
                        </InputWrapper>
                        <InputWrapper>
                            <label >Preço</label>
                            <Input type="number" value={price} dark={false} placeholder="R$ 00,00" onChange={e => setPrice(e.target.value)} />
                        </InputWrapper>

                    </div>
                    <div>

                    <InputWrapper>
                        <label >Descrição</label>
                        <textarea value={description} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={e => setDescription(e.target.value)} />
                    </InputWrapper>
                    <ButtonsWrapper>
                        <button onClick={e => handleDeleteFood(e)}>Excluir prato</button>
                        <button onClick={e => handleEditFood(e)}>Salvar alterações</button>
                    </ButtonsWrapper>
                    </div>

                </Form>
            </main>
            <Footer />
        </Container>
    )
}