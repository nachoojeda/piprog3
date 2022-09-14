import React, {Component} from 'react'
import Card from '../Card/Card'
import './styles.css'
import { Link } from "react-router-dom";



class List extends Component {
  constructor(props){
    super(props)
    this.state={
      charts: [],
      backup: [],
      // albums: [],
      // backupAlbum: [],
    //   pagina:0,
      favorito:[]
    }
  }

  componentDidMount(){
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=12')
    //    'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart?/0/tracks?index=12&limit10'
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

  // backupAlbum(){
  //   this.setState({
  //     albums: this.state.backupAlbum
  //   })
  // }


  render(){
    return (
      <>
       <h1 className='titulo'>Home</h1>
        <h1 className='titulo'>Top 10 Charts</h1>
        <section className="card-container">
          {this.state.charts.map((chart, idx) => 
            <Card 
              key={`${Date.now()}-${idx}`}  
              info={chart}
              borrar={(name)=> this.borrar(name)}
              favorito={(id)=> this.favorites(id)}
            />)}

            <button onClick={()=> this.backup()}>Volver atras</button> 
            <button onClick={()=> this.verTodas()}>
            <Link to='/Every' > Ver todas </Link>
            </button>
        </section>
      
      </>
    )
  }
}

export default  List