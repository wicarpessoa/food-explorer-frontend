import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Marker } from "../../components/Marker";
import { TextButton } from "../../components/TextButton";
import { Container, InputFile, Form, TagsWrapper, ButtonsWrapper, InputWrapper } from "./styles";
import { UploadSimple } from "phosphor-react";

import { api } from "../../services/api";


export function Edit() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    
    const [img, setImg] = useState(null)

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('');

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState([])


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

    async function handleNewFood() {
        api.post("/foods", {
            title,
            category_id: selectedCategory,
            description,
            ingredients,
            price: price * 100,
          })
          .then(foodResponse => {
            console.log("Food created:", foodResponse.data);
        
            const fileUploadForm = new FormData();
            fileUploadForm.append("img", img);
            const food_id = foodResponse.data[0]
            return api.patch(`foods/avatar/${food_id}`, fileUploadForm);
          }).catch(error => {
            alert(error);
          });
        }
    const handleSelectChange = (event) => {
        setSelectedCategory(event.target.value);
      };

    useEffect( () => {
        async function fetchCategories(){
          const response = await api.get("/categories")
          setCategories(response.data)  
        }
        fetchCategories()
    }, [])

    return (
        <Container>
            <Header />
            <main>
                <div>
                <TextButton title='< voltar' />
                <h2>Novo prato</h2>

                </div>
                <Form>
                    <div>
                        <InputWrapper>
                            <label > Imagem do prato</label>
                            <InputFile>
                                <label htmlFor="img">
                                    <UploadSimple size={24} />
                                    <span>{img ? img.name : "Selecione a imagem" } </span>
                                    <input type="file" id="img" onChange={handleChangeAvatar} />
                                </label>
                            </InputFile>
                        </InputWrapper>
                        <InputWrapper>
                            <label >Nome</label>
                            <Input dark={false} placeholder="Ex: Salada Ceaser" onChange={e => setTitle(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <label >Categoria</label>
                            <select onChange={handleSelectChange}>
                                <option value="" disabled selected>Refeição</option>
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
                            <Input dark={false} placeholder="R$ 00,00" onChange={e => setPrice(e.target.value)} />
                        </InputWrapper>

                    </div>
                    <div>

                    <InputWrapper>
                        <label >Descrição</label>
                        <textarea placeholder="Fale brevePmente sobre o prato, seus ingredientes e composição" onChange={e => setDescription(e.target.value)} />
                    </InputWrapper>
                    <ButtonsWrapper>
                        <button onClick={handleNewFood}>Salvar alterações</button>
                    </ButtonsWrapper>
                    </div>

                </Form>
            </main>
            <Footer />
        </Container>
    )
}