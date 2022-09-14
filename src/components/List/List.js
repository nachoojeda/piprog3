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
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart?/0/tracks?index=10')
    //    'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart?/0/tracks?index=10'
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({
      charts: data,
      backup: data,
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


  render(props){
    return (
      <>
       <h1 className='titulo'>{this.props.titulo}</h1>
        <section className="card-container">
          
        {/* {props.info.map((item, idx) =>{
            console.log(item);
        return <Card key={`${Date.now()}-${idx}`} data={item}/> */}

          {this.props.info.map((chart, idx) => 
            
            <Card 
              key={`${Date.now()}-${idx}`}  
              info={chart}
              borrar={(name)=> this.borrar(name)}
              favorito={(id)=> this.favorites(id)}
            />)}

            
        </section>
        
        <button onClick={()=> this.backup()}>Volver atras</button> 
            <button onClick={()=> this.verTodas()}>
            <Link to='/Every' > Ver todas </Link>
            </button>
      
      </>
    )
  }
}

export default  List