import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from '../src/screens/Home/Home'




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
