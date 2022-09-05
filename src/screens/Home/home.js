import React from 'react'
import Cartas from './components/Cartas';
import Characters from './components/Characters';


function Home() {


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

      <main>
      <Cartas info={tarjetas}/>
      <Characters/>
      </main>

    </div>
  );
}

export default Home;
