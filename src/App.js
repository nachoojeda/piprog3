import React from 'react';
/*import { Route, Switch } from "react-router-dom";*/
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from '../src/screens/Home/Home'




function App() {

  const opciones = ['Home', 'Favoritos', 'Ver Todas']

  let nombre = ''

  return (
    <div>

      <Header nombre={nombre} menu={opciones}/>
       
      <Footer/>

    </div>
  );
}

export default App;

 



   /*     <Route path = '/TodasPeliculas' component = {TodasPeliculas} /> */

      