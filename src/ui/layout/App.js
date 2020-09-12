import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Usuarios from "../componentes/Usuarios"

class App extends React.Component{
    
    constructor(){
        super()
        this.state = {
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


    render(){
        let {usuarios} = this.state
        return (
            <>
                <Header/>
                <Main/>
                <Usuarios
                    usuarios={usuarios}
                    borrarUsuario={this.borrarUsuario}
                />
                <Footer/>                
            </> 
        ) 
    }
}

export default App