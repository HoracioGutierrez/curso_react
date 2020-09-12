import React from "react"
import {connect} from "react-redux"
import {aumentarContador,resetearContador,restarContador} from "../../api/actions/Contador"
import {bindActionCreators} from "redux"

import Usuarios from "../paginas/Usuarios"
import Contacto from "../paginas/Contacto"
import Productos from "../paginas/Productos"

import {Route,Switch} from "react-router-dom"

const Main = ({contador,aumentarContador,resetearContador,restarContador}) => 
    <main>
        <Switch>
            <Route path="/usuarios" component={Usuarios}/>
            <Route path="/productos" component={Productos}/>
            <Route path="/contacto" component={Contacto}/>
        </Switch>
        {/* <h2>Home</h2>
        <p>El contador va :  {contador}</p>
        <button onClick={aumentarContador}>+</button>
        <button onClick={resetearContador}>resetear</button>
        <button onClick={restarContador}>-</button> */}
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
    ({Contador}) => ({contador:Contador.contador}),
    mapDispatchToProps
)(Main)