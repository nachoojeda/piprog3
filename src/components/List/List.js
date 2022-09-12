import React, {Component} from 'react'
import Card from '../Card/Card'
import './styles.css'



class List extends Component {
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
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=12&limit=12')
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

//   cargarMas(){
//     fetch(`https://rickandmortyapi.com/api/character?page=${this.state.pagina + 1}`)
//     .then(resp => resp.json())
//     .then(data => this.setState({
//       charts: this.state.charts.concat(data.results),
//       pagina: this.state.pagina + 1
//     }))
//     .catch(err => console.log(err))

//   }


  borrar(id){
    let arrayFiltrado = this.state.charts.filter(chart => chart.id !== id)
    this.setState({
      charts: arrayFiltrado
    })
  }

  backup(){
    this.setState({
      charts: this.state.backup
    })
  }


  render(){
    return (
      <>
        <h1 className='titulo'>Top Charts</h1>
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

export default  List