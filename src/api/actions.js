export let aumentarContador = () => {
    return {type:"CONTADOR_SUMAR"}
}


export let restarContador = () => {
    return {type:"CONTADOR_RESTAR"}
}


export let resetearContador = () => {
    return {type:"CONTADOR_RESETEAR"}
}


export let manejarElSubmit = (e) => {
    e.preventDefault()
    return { type : "MANEJAR_SUBMIT" }
}

export let manejarCambioNombre = (e) => {
    let nombre = e.target.value
    return { type : "MANEJAR_NOMBRE" , nombre }
}

export let manejarCambioApellido = (e) => {
    let apellido = e.target.value
    return { type : "MANEJAR_APELLIDO" , apellido }
}