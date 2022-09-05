import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';


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
