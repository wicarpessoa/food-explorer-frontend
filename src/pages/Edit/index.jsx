import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Marker } from "../../components/Marker";
import { TextButton } from "../../components/TextButton";
import { Container, InputFile, Form, TagsWrapper, ButtonsWrapper, InputWrapper } from "./styles";
import { UploadSimple } from "phosphor-react";

export function Edit() {
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState([])
    function handleAddIngredient() {
        setIngredients(prevState=> [...prevState, newIngredient])
        setNewIngredient("")
    }
    function handleRemoveIngredient (deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }
    return (
        <Container>
            <Header />
            <main>
                <div>
                <TextButton title='< voltar' />
                <h2>Editar prato</h2>

                </div>
                <Form>
                    <div>
                        <InputWrapper>
                            <label > Imagem do prato</label>
                            <InputFile>
                                <label htmlFor="img">
                                    <UploadSimple size={24} />
                                    <span>Selecione a imagem</span>
                                    <input type="file" id="img" />
                                </label>
                            </InputFile>
                        </InputWrapper>
                        <InputWrapper>
                            <label >Nome</label>
                            <Input dark={false} placeholder="Ex: Salada Ceaser" />
                        </InputWrapper>
                        <InputWrapper>
                            <label >Categoria</label>
                            <select >
                                <option value="" disabled selected>Refeição</option>
                                <option>carne</option>
                            </select>
                        </InputWrapper>
                    </div>
                    <div>
                        <InputWrapper>
                            <label >Ingredientes</label>
                            <TagsWrapper>
                                <Marker isNew={true}  value={newIngredient} onChange={e=> setNewIngredient(e.target.value)} onClick={handleAddIngredient} />
                                {ingredients.map((ingredient, i)=> {
                                    return (
                                        <Marker key={String(i)} isNew={false} value={ingredient} onClick={() => handleRemoveIngredient(ingredient)} />
                                    )
                                })}
                            </TagsWrapper>
                        </InputWrapper>
                        <InputWrapper>
                            <label >Preço</label>
                            <Input dark={false} placeholder="R$ 00,00" />
                        </InputWrapper>

                    </div>
                    <div>

                    <InputWrapper>
                        <label >Descrição</label>
                        <textarea placeholder="Fale brevePmente sobre o prato, seus ingredientes e composição" />
                    </InputWrapper>
                    <ButtonsWrapper>
                        <button>Excluir prato</button>
                        <button>Salvar alterações</button>
                    </ButtonsWrapper>
                    </div>

                </Form>
            </main>
            <Footer />
        </Container>
    )
}