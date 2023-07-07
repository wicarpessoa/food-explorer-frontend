import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Marker } from "../../components/Marker";
import { TextButton } from "../../components/TextButton";
import { Container, InputFile, Form, TagsWrapper, ButtonsWrapper, InputWrapper } from "./styles";
import { UploadSimple } from "phosphor-react";

export function New() {
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
                                <Marker isNew={true} />
                                <Marker isNew={false} />
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