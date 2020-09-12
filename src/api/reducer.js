let init = {
    links : ["usuarios","productos","contacto"],
    contador : 0,
    form : {
        nombre : "",
        apellido : ""
    },
    usuarios : []
}


let reducer = (prevState = init,action) => {
    switch(action.type){
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
        case "CONTADOR_SUMAR":
            return {
                ...prevState ,
                contador : prevState.contador + 1
            }
        case "CONTADOR_RESTAR":
            return {
                ...prevState , 
                contador : prevState.contador - 1
            }
        case "CONTADOR_RESETEAR":
            return {
                ...prevState , 
                contador : 0
            }
        default :
            return prevState    
    }
}

export default reducer