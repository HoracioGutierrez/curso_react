import React from "react"
import {connect} from "react-redux"
import {aumentarContador,resetearContador,restarContador} from "../../api/actions"
import {bindActionCreators} from "redux"

const Main = ({contador,aumentarContador,resetearContador,restarContador}) => 
    <main>
        <h2>Home</h2>
        <p>El contador va :  {contador}</p>
        <button onClick={aumentarContador}>+</button>
        <button onClick={resetearContador}>resetear</button>
        <button onClick={restarContador}>-</button>
    </main>



let mapDispatchToProps = (dispatch) => {
    return {
        //nombreDeProp : tuFunction + dispatch
        aumentarContador : bindActionCreators(aumentarContador,dispatch),
        restarContador : bindActionCreators(restarContador,dispatch),
        resetearContador : bindActionCreators(resetearContador,dispatch)
    }
}

export default connect(
    ({contador}) => ({contador}),
    mapDispatchToProps
)(Main)