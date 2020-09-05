import React from "react"
import {connect} from "react-redux"


const Header = ({links}) =>
    <header>
        <h1>React SPA</h1>
        <nav>
            { links.map( (link,i)=> <a key={i} href={`/${link}`}>{link}</a> ) }
        </nav>
    </header>

/* let mapStateToProps = (store) => { 
    return {
        //el nombre de prop : el valor del store
        links : store.links
    } 
} */



/* let mapStateToProps = (store) => { 
    let {links} = store
    return {
        //el nombre de prop : el valor del store
        links : links
    } 
} */



/* let mapStateToProps = (store) => { 
    let {links} = store
    return { links } 
} */


/* let mapStateToProps = ({links}) => { 
    return { links } 
} */


/* let mapStateToProps = ({links}) => ({ links })  */

/* let b = () => { return {} } */


/* export default connect(mapStateToProps)(Header) */


export default connect(({links}) => ({ links }))(Header)