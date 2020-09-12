let init = {
    form : {
        nombre : "",
        apellido : ""
    },
    usuarios : []
}

let UsuariosReducer = (prevState = init , action) => {
    switch(action.type){
        case "MANEJAR_BORRAR" : 

            let start = prevState.usuarios.slice(0,action.i)
            let end = prevState.usuarios.slice(action.i+1)

            let nuevos_usuarios = [
                ...start,
                ...end
            ]

            return {
                ...prevState,
                usuarios : nuevos_usuarios
            }
        case "MANEJAR_SUBMIT" : 
            return {
                ...prevState,
                usuarios : [
                    ...prevState.usuarios,
                    prevState.form
                ],
                form : {
                    nombre : "",
                    apellido : ""
                }
            }
        case "MANEJAR_APELLIDO" : 
            return {
                ...prevState,
                form : {
                    nombre : prevState.form.nombre,
                    apellido : action.apellido
                }
            }
        case "MANEJAR_NOMBRE" : 
            return {
                ...prevState,
                form : {
                    apellido : prevState.form.apellido,
                    nombre : action.nombre
                }
            }
        default :
            return prevState
    }
}

export default UsuariosReducer