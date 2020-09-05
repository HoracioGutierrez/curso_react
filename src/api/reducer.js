let init = {
    links : ["usuarios","productos","contacto"],
    contador : 0
}


let reducer = (prevState = init,action) => {
    switch(action.type){
        case "CONTADOR_SUMAR":
            return {
                ...prevState,
                contador : prevState.contador + 1
            }
        case "CONTADOR_RESTAR":
            return {
                ...prevState
            }
        case "CONTADOR_RESETEAR":
            return {
                ...prevState
            }
        default :
            return prevState    
    }
}

export default reducer