import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Cartas from './components/Cartas';


function App() {

  const opciones = ['Home', 'Favoritos', 'Ver Todas']

  let nombre = ''

  const tarjetas = [
    {
      title:'Products in Database',
      price: '135',
      icon: 'clipboard-list'
    },
    {
      title:'Amount in Products',
      price: '$645.634',
      icon: 'dollar-sign'
    },
    {
      title:'Users Quantity',
      price: '90',
      icon: 'user-check'
    },
  ]

  return (
    <div>

      <Header nombre={nombre} menu={opciones}/>
      <main>
      <Cartas info={tarjetas}/>
      </main>
      <Footer/>

    </div>
  );
}

export default App;
