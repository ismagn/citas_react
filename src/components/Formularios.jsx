import { useState, useEffect } from "react"
import Error from "./error";


function Formularios({pacientes,setPacientes,paciente,setPaciente}) {
  const [nombre,setNombre]=useState("");
  const [propietario,setPropietario]=useState("");
  const [email,setEmail]=useState("");
  const [alta,setAlta]=useState("");
  const [sintomas,setSintomas]=useState("");
  const [error,setError]=useState(false);

  useEffect(()=>{
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setAlta(paciente.alta)
    setSintomas(paciente.sintomas)
  },[paciente])
  
  function generarId (){
  let rand = Date.now()
  return rand
  }

  const Submit=(e)=>{
    e.preventDefault();

    if ([nombre,propietario,email,alta,sintomas].includes("")) {
      setError(true)
    } else{
      setError(false);
    
    const objetoPaciente={
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }

    if (paciente.id) {
    objetoPaciente.id=paciente.id
      const pacientesActualizados = pacientes.map(i => i.id === paciente.id ? objetoPaciente : i)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      objetoPaciente.id = generarId()
      setPacientes([...pacientes,objetoPaciente])

    }
    
    //reiniciar formulario para agregar datos diferentes
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

    }

    

  }

  return (
    <div className=" md:w-1/2 lg:w-2/5" >
      <h1 className="text-center font-black text-2xl lg:text-3xl " >Seguimiento Pacientes</h1>
      <p className="font-black text-center mt-5">Añade Pacientes y <span className="text-indigo-600 ">Administralos</span></p>

      <form action="" className="shadow-md bg-white p-5 mt-10 mx-2 rounded-md"
      onSubmit={Submit}
      >
        { error && <Error msj="faltan campos por llenar" />}
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="mascota">nombre mascota</label>
          <input className="rounded-md w-full border-2 mt-2 p-2" type="text" id="mascota" placeholder="Nombre de la Mascota" 
          value={nombre}
          onChange={(e)=> setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="propietario">nombre propietario</label>
          <input className="rounded-md w-full border-2 mt-2 p-2" type="text" id="propietario" placeholder="Nombre del Propietario" 
          value={propietario}
          onChange={(e)=> setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="email">email</label>
          <input className="rounded-md w-full border-2 mt-2 p-2" type="email" id="email" placeholder="Email Contacto Propietario" 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="alta">alta</label>
          <input className="rounded-md w-full border-2 mt-2 p-2" type="date" id="alta" 
          value={alta}
          onChange={(e)=> setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="sintomas">sintomas</label>
          <textarea className="rounded-md w-full border-2 mt-2 p-2" name="sintomas" id="sintomas" cols="30" rows="2" placeholder="Describe los Sintomas"
          value={sintomas}
          onChange={(e)=> setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" className="bg-indigo-600 text-white rounded-md mx-auto w-full p-3 font-bold cursor-pointer hover:bg-indigo-800 transition-all" 
        value={paciente.id ? 'ACTUALIZAR PACIENTE' : 'AGREGAR PACIENTE'} />
      </form>
    </div>
  )
}

export default Formularios
