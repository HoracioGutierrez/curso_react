import React from "react"
import ListadoUsuarios from "./ListadoUsuarios"
import {connect} from "react-redux"
import {manejarElSubmit,manejarCambioApellido,manejarCambioNombre} from "../../api/actions/Usuarios"
import {bindActionCreators} from "redux"

const Usuarios = ({nombre,apellido,usuarios,manejarElSubmit,manejarCambioNombre,manejarCambioApellido,borrarUsuario}) => 
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
        <ListadoUsuarios 
            usuarios={usuarios}
            borrarUsuario={borrarUsuario}
        />
    </>

export default connect(
    ({Usuarios})=> ({ nombre : Usuarios.form.nombre , apellido : Usuarios.form.apellido }),
    (dispatch)=>{
        return {
            manejarElSubmit : bindActionCreators(manejarElSubmit,dispatch),
            manejarCambioNombre : bindActionCreators(manejarCambioNombre,dispatch),
            manejarCambioApellido : bindActionCreators(manejarCambioApellido,dispatch)
        }
    }
)(Usuarios)