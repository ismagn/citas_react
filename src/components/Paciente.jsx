

function Paciente({i,setPaciente,eliminarPaciente}) {

    const confirmarEliminar=()=>{
        const respuesta = confirm("deseas borrar a este paciente?");
        if (respuesta) {
            eliminarPaciente(i.id)
        }
    }

    return (
    <>
    <div className="bg-white mt-10 mx-1 p-5 rounded-md shadow-md">

    <h2 className="font-bold mt-3">Id: <span className="font-normal">{i.id}</span></h2>

    <h2 className="font-bold mt-3">NOMBRE: <span className="font-normal">{i.nombre}</span></h2>

    <h2 className="font-bold mt-3">PROPIETARIO: <span className="font-normal">{i.propietario}</span></h2>

    <h2 className="font-bold mt-3">EMAIL: <span className="font-normal">{i.email}</span></h2>

    <h2 className="font-bold mt-3">FECHA ALTA: <span className="font-normal">{i.alta}</span></h2>

    <h2 className="font-bold mt-3">SINTOMAS: <span className="font-normal">{i.sintomas}</span></h2>

    <div>
        <button className="mt-4 px-5 py-2 bg-indigo-600 rounded-md text-white" 
        onClick={()=>setPaciente(i)} 
        >Editar
        </button>
        
        <button className="mt-4 px-5 py-2 mx-5 bg-red-600 rounded-md text-white" 
        onClick={confirmarEliminar} 
        >Eliminar
        </button>
    </div>

</div>
    </>
)
}

export default Paciente
