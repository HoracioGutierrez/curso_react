import React from "react"

class Main extends React.Component {

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
        return(
            <main>
                <h2>Home</h2>
                <p>El contador va :  {this.state.contador}</p>
                { this.state.contador > 5
                ? <p>Llego al maximo!</p> : null }
                <button onClick={this.aumentarContador}>+</button>
                <button onClick={this.resetearContador}>resetear</button>
                <button onClick={this.restarContador}>-</button>
            </main>
        )
    }
}

export default Main