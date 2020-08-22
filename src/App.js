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
            nombre : "",
            apellido : "",
            usuarios : []
        }
    }

    manejarElSubmit = () => {}

    manejarCambioNombre = () => {}

    manejarCambioApellido = () => {}

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
        let {links,contador,nombre,apellido,usuarios} = this.state
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
                    nombre={nombre}
                    apellido={apellido}
                    usuarios={usuarios}
                    manejarElSubmit={this.manejarElSubmit}
                    manejarCambioNombre={this.manejarCambioNombre}
                    manejarCambioApellido={this.manejarCambioApellido}
                />
                <Footer/>                
            </> 
        ) 
    }
}

export default App