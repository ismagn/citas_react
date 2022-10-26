import { useState,useEffect } from "react"
import Formularios from "./components/Formularios"
import Headers from "./components/Headers"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const[pacientes,setPacientes]=useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const[paciente,setPaciente]=useState({});
  
  const eliminarPaciente = (id)=>{
    const pacientesActualizados = pacientes.filter(i => i.id !== id);
    setPacientes(pacientesActualizados) 
  }


  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes]);

  return (
    <>
    <div className="container mx-auto  mt-24 ">
      <Headers/>
      <div className="mt-12 md:flex ">
      <Formularios
      //se mandan estos prop a formularios para almacenar los datos de los pacientes
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />
      <ListadoPacientes
      //se manda este prop para mostrar los datos de los pacientes
      pacientes={pacientes}

      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      />
      </div>
    </div>
    </>
  )
}

export default App
