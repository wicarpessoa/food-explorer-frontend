import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Marker } from "../../components/Marker";
import { TextButton } from "../../components/TextButton";
import { Container, InputFile, Form, TagsWrapper } from "./styles";
import { UploadSimple  } from "phosphor-react";

export function New() {
    return(
    <Container>
        <Header/>
        <main>
            <TextButton title='< voltar'/>
            <h2>Novo prato</h2>
            <Form>
            <label > Imagem do prato</label>
            <InputFile>
            <label htmlFor="img">
                <UploadSimple size={24}/>
                <span>Selecione a imagem</span>
                <input type="file" id="img" />
            </label>
            </InputFile>
            <label >Nome</label>
            <Input dark={false} placeholder="Ex: Salada Ceaser"/>
            <label >Categoria</label>
            <select >
                <option value="" disabled selected>Refeição</option>

                <option>carne</option>
            </select>
            <label >Ingredientes</label>
            <TagsWrapper>
                <Marker isNew={true}/>
                <Marker isNew={false}/>
            </TagsWrapper>
            <label >Preço</label>
            <Input dark={false} placeholder="R$ 00,00"/>
           <label >Descrição</label>
           <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
            <div>
                <button>Excluir prato</button>
                <button>Salvar alterações</button>
            </div>
            </Form>
        </main>
        <Footer/>
    </Container>
    )
}