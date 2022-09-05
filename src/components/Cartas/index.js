import React, { Component } from 'react'
import Carta from '../Carta/index'

class Cartas extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <>
        <h1>Top music</h1>
        <section className="top-data">
            {this.props.info.map((tarjeta, idx) => <Carta key={`${Date.now()}-${idx}`} info={tarjeta}/>)}
        </section>
      </>
    )
  }
}

export default Cartas
