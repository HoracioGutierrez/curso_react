import React from "react"
import {connect} from "react-redux"
import {borrarUsuario} from "../../api/actions/Usuarios"
import {bindActionCreators} from "redux"

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

export default connect(
    ({Usuarios})=>({usuarios:Usuarios.usuarios}),
    (dispatch)=>({ borrarUsuario : bindActionCreators(borrarUsuario,dispatch) })
)(ListadoUsuarios)