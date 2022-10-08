

function Formularios() {
  return (
    <div className=" md:w-1/2 lg:w-2/5" >
      <h1 className="text-center font-black text-3xl" >Seguimiento Pacientes</h1>
      <p className="font-black text-center mt-5">Añade Pacientes y <span className="text-indigo-600 ">Administralos</span></p>

      <form action="" className="shadow-md bg-white p-5 m-10 rounded-md">
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="mascota">nombre mascota</label>
          <input className="rounded-md w-full border-2 mt-2 p-2" type="text" id="mascota" placeholder="Nombre de la Mascota" />
        </div>
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="propietario">nombre propietario</label>
          <input className="rounded-md w-full border-2 mt-2 p-2" type="text" id="propietario" placeholder="Nombre del Propietario" />
        </div>
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="email">email</label>
          <input className="rounded-md w-full border-2 mt-2 p-2" type="email" id="email" placeholder="Email Contacto Propietario" />
        </div>
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="alta">alta</label>
          <input className="rounded-md w-full border-2 mt-2 p-2" type="date" id="alta" />
        </div>
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="sintomas">sintomas</label>
          <textarea className="rounded-md w-full border-2 mt-2 p-2" name="sintomas" id="sintomas" cols="30" rows="2" placeholder="Describe los Sintomas"></textarea>
        </div>
        <button type="submit" className="bg-indigo-600 text-white rounded-md mx-auto w-full p-3 font-bold cursor-pointer hover:bg-indigo-800 transition-all">AGREGAR PACIENTE</button>
      </form>
    </div>
  )
}

export default Formularios
