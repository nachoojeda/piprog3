import React from 'react';
import { Link } from "react-router-dom";
import './styles.css'



function Header() {

    return (
        <nav>
            
            <h1><img className= 'logo' src="https://1000marcas.net/wp-content/uploads/2020/02/Logo-Itunes.png" alt=""/>UrMusic</h1> 
            
            
            <ul className= 'main-nav' >


                <li><Link exact={true} to='/'> </Link> </li>

                <li><Link to='/'> Home </Link> </li>

                <li><Link to='/Favorites'> Favorites </Link></li>

                

        
            </ul>
            
        </nav>
    )
}

export default Header
