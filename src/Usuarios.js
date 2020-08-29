import React from "react"


const Usuarios = ({nombre,apellido,usuarios,manejarElSubmit,manejarCambioNombre,manejarCambioApellido}) => 
    <>
        <form onSubmit={manejarElSubmit}>
            <div>
                <input onChange={manejarCambioNombre} type="text" placeholder="Nombre" value={nombre}/>
            </div>
            <div>
                <input onChange={manejarCambioApellido} type="text" placeholder="Apellido" value={apellido}/>
            </div>
            <button>Guardar</button>
        </form>
        <ul></ul>
    </>

export default Usuarios