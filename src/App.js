import React from 'react'
import Prueba from './components/Prueba';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const opciones = ['ADMIN', 'Charts', 'Pages', 'Tables', 'Paseo de perros']

  let nombre = ''

  return (
    <div>

      <Header nombre={nombre} menu={opciones}/>
      <main>
      <Prueba/>
      </main>
      <Footer/>

    </div>
  );
}

export default App;
