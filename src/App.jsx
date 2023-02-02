import { Input } from "./components/Input"
import { Button} from "./components/Button"
import {MagnifyingGlass} from 'phosphor-react'
function App() {

  return (
    <div className="App">
      <div >
      <Input placeholder="Busque por pratos ou ingredientes" icon={MagnifyingGlass}/>
      <Button title="entrar"/>
      </div>
    </div>
  )
}

export default App
