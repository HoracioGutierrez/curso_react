import React from "react"
import {connect} from "react-redux"

const Main = ({contador,aumentarContador,resetearContador,restarContador}) => 
    <main>
        <h2>Home</h2>
        <p>El contador va :  {contador}</p>
        <button onClick={aumentarContador}>+</button>
        <button onClick={resetearContador}>resetear</button>
        <button onClick={restarContador}>-</button>
    </main>


/* let mapStateToProps = (store) => {
    return {
        //nombre De Prop : valor del store
        contador : store.contador
    }
} */

let mapDispatchToProps = () => {
    
}

//export default connect(mapStateToProps,mapDispatchToProps)(Main)


export default connect(
    ({contador}) => ({contador})
)(Main)