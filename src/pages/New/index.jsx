import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { Container, InputFile, Form } from "./styles";
import { UploadSimple  } from "phosphor-react";

export function New() {
    return(
    <Container>
        <Header/>
        <main>
            <h2>Novo prato</h2>
            <TextButton/>
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
            <Input placeholder="Ex: Salada Ceaser"/>
            <label >Categoria</label>
            <select>
                <option>

                </option>
            </select>
            <label >Preço</label>
            <Input/>
           <label >Descrição</label>
           <textarea></textarea>
            </Form>
        </main>
        <Footer/>
    </Container>
    )
}