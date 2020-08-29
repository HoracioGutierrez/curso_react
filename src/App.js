import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Usuarios from "./Usuarios"

class App extends React.Component{
    
    constructor(){
        super()
        this.state = {
            contador : 0,
            links : ["usuarios","productos","contacto"],
            form : {
                nombre : "",
                apellido : ""
            },
            usuarios : []
        }
    }


    borrarUsuario = (i) => {
        let start = this.state.usuarios.slice(0,i)
        let end = this.state.usuarios.slice(i+1)

        let nuevos_usuarios = [
            ...start,
            ...end
        ]

        this.setState({
            usuarios : nuevos_usuarios
        })
    }


    manejarElSubmit = (e) => {
        e.preventDefault()

        //Como no puedo modificar el state, hago una copia. De esta manera mantengo todos los posibles usuarios que haya hasta el momento
        //let copia = this.state.usuarios.slice(0)
        //Creo mi nuevo usuario
        /* let usuario = {
            nombre : this.state.form.nombre,
            apellido : this.state.form.apellido
        }  */       
        //Pongo el nuevo usuario al final del array
        //copia.push(usuario)
        

        this.setState({
            usuarios : [
                ...this.state.usuarios,
                this.state.form
            ],
            form : {
                nombre : "",
                apellido : ""
            }
        })
    }



    manejarCambioNombre = (e) => {
        let nombre = e.target.value
        this.setState({ 
            form : { 
                ...this.state.form,
                nombre : nombre
            } 
        })
    }

    manejarCambioApellido = (e) => {
        let apellido = e.target.value
        this.setState({ 
            form : { 
                ...this.state.form,
                apellido : apellido
            } 
        })
    }

    aumentarContador = () => {
        this.setState({ contador : this.state.contador + 1 }) 
    }

    restarContador = () => {
        this.setState({ contador : this.state.contador - 1 }) 
    }

    resetearContador = () => {
        this.setState({ contador : 0 }) 
    }

    render(){
        let {links,contador,form,usuarios} = this.state
        return (
            <>
                <Header links={links}/>
                <Main 
                    contador={contador}
                    aumentarContador={this.aumentarContador}
                    restarContador={this.restarContador}
                    resetearContador={this.resetearContador}
                />
                <Usuarios
                    nombre={form.nombre}
                    apellido={form.apellido}
                    usuarios={usuarios}
                    manejarElSubmit={this.manejarElSubmit}
                    manejarCambioNombre={this.manejarCambioNombre}
                    manejarCambioApellido={this.manejarCambioApellido}
                    borrarUsuario={this.borrarUsuario}
                />
                <Footer/>                
            </> 
        ) 
    }
}

export default App