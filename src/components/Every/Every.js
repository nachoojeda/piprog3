import React, { Component } from 'react'
import Card from '../Card/Card'
class Every extends Component {
  constructor(props){
    super(props)
    this.state={
      charts: [],
      backup: [],
    //   pagina:0,
      favorito:[]
    }
  }
  componentDidMount(){
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=12&limit=32')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({
      charts: data.data,
      backup: data.data,
    //   pagina: this.state.pagina + 1
    })})
    .catch(err => console.log(err))
  }
  render() {
    return (
      <>
      <h1 className='titulo'>Todas las canciones y albumes</h1>
      <section className="card-container">
        {this.state.charts.map((chart, idx) => 
          <Card 
            key={`${Date.now()}-${idx}`}  
            info={chart}
            borrar={(name)=> this.borrar(name)}
            favorito={(id)=> this.favorites(id)}
          />)}

          <button onClick={()=> this.backup()}>Volver atras</button> 
      </section>
    </>
    )
  }
}

export default Every
