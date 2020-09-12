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

export let borrarUsuario = (i) => {
    /* let start = this.state.usuarios.slice(0,i)
    let end = this.state.usuarios.slice(i+1)

    let nuevos_usuarios = [
        ...start,
        ...end
    ] */
    return { type : "MANEJAR_BORRAR" , i }
}