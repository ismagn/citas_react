import Formularios from "./components/Formularios"
import Headers from "./components/Headers"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  return (
    <div className="container mx-auto  mt-24 ">
      <Headers/>
      <div className="mt-12 md:flex ">
      <Formularios/>
      <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
