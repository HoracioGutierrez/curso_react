import React from "react"

const ListadoUsuarios = ({usuarios,borrarUsuario}) => 
    <ul>
        {usuarios.length
        ? usuarios.map((usuario,i)=> 
            <li key={i}>
                {usuario.nombre} {usuario.apellido}
                <button >editar</button>
                <button onClick={borrarUsuario.bind(null,i)}>borrar</button>
            </li> 
        )
        : <li>No hay usuarios</li> }
    </ul>

export default ListadoUsuarios