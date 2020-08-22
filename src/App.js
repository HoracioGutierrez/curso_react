import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

class App extends React.Component{
    
    constructor(){
        super()
        this.state = {
            contador : 0,
            links : ["usuarios","productos","contacto"]
        }
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
        let {links,contador} = this.state
        return (
            <>
                <Header links={links}/>
                <Main 
                    contador={contador}
                    aumentarContador={this.aumentarContador}
                    restarContador={this.restarContador}
                    resetearContador={this.resetearContador}
                />
                <Footer/>                
            </> 
        ) 
    }
}

export default App