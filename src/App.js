import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

class App extends React.Component{
    
    constructor(){
        super()
        this.state = {
            contador : 0
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
        return (
            <>
                <Header/>
                <Main 
                    contador={this.state.contador}
                    aumentarContador={this.aumentarContador}
                    restarContador={this.restarContador}
                    resetearContador={this.resetearContador}
                />
                <Footer
                    contador={this.state.contador}
                />                
            </> 
        ) 
    }
}

export default App