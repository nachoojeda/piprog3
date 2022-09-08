/*import React from 'react'
import './styles.css'

function Header(props){
    return(
        <nav>
        <ul className="main-nav">

            <li>{props.nombre}
                <img className= 'logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/2560px-Apple_Music_logo.svg.png" alt=""/>
                </li>

            {props.menu.map((opcion, idx) =><li key={`${Date.now()}-${idx}`} >{opcion}</li>)}
        </ul>
        <ul className={`user ${props.clase}`}>
            <li>{props.nombre}
                <img src="./img/user.jpg" alt=""/>
                </li>
        </ul>
        </nav>
    )
}

export default Header */

import React from 'react';
import { Link } from "react-router-dom";
import './styles.css'



function Header() {

    return (
        <nav>
            
            <h2><img className= 'logo' src="https://1000marcas.net/wp-content/uploads/2020/02/Logo-Itunes.png" alt=""/></h2>
            
            <ul className= 'main-nav' >


                <li><Link exact={true} to='/'> </Link> </li>

                <li><Link to='/'> Home </Link> </li>

                <li><Link to='/Favorites'> Favorites </Link></li>

                <li><Link to='/Every' > Every Album/Song </Link></li>

        
            </ul>
            
        </nav>
    )
}

export default Header
