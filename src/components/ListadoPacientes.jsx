import { useEffect } from "react"
import Paciente from "./Paciente"

function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}) {

  

  return (
    <div className="md:w-2/3">
      <h2 className="text-center font-black text-2xl lg:text-3xl mt-10 md:m-0 " >Listado Pacientes</h2>
      <p className="font-black text-center my-5">Administra tus Pacientes y <span className="text-indigo-600 ">Citas</span></p>

      {pacientes.length==0 ? (
        <>
          <div className=" h-2/3 flex justify-center items-center ">
            <h2 className="">no hay pacientes todavia</h2>
          </div>
        
        </>
      ) : 
      ""
      }


{pacientes.map((i)=>(

  <Paciente 
  i={i}
  key={i.id}
  setPaciente={setPaciente}
  eliminarPaciente={eliminarPaciente}
  />
))}

    </div>
  )
}

export default ListadoPacientes
