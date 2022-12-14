import React, { Component } from 'react'
import Card from '../Card/Card'
import './styles.css'
import { Link } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charts: [],
      // backup: [],
      favorito: []
    }
  }

  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart?/0/tracks?offset=10')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          charts: data,
          // backup: data,
        })
      })
      .catch(err => console.log(err))
  }


  // borrar(id){
  //   let arrayFiltrado = this.state.charts.filter(chart => chart.id !== id)
  //   this.setState({
  //     charts: arrayFiltrado
  //   })
  // }

  // backup(){
  //   this.setState({
  //     charts: this.state.backup
  //   })
  // }


  render(props) {
    return (
      <div>
        <h1 className='titulo'>{this.props.titulo}</h1>
        <section className="card-container">

          {this.props.info.map((chart, idx) =>

            <Card
              key={`${Date.now()}-${idx}`}
              info={chart}
              borrar={(name) => this.borrar(name)}
              favorito={(id) => this.favorites(id)}
            />)}


        </section>

        {/* <button onClick={()=> this.backup()}>Volver atras</button>  */}


      </div>
    )
  }
}

export default List