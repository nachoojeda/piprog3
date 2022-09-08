import React from 'react'
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

export default Header