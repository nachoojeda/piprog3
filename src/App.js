import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from '../src/screens/Home'




function App() {

  const opciones = ['Home', 'Favoritos', 'Ver Todas']

  let nombre = ''

  return (
    <div>

      <Header nombre={nombre} menu={opciones}/>
       <Home/>
      <Footer/>

    </div>
  );
}

export default App;

 



        <Route path = '/TodasPeliculas' component = {TodasPeliculas} />

      