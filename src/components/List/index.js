import React, {Component} from 'react'
import Card from '../Card/index'


class List extends Component {
  constructor(props){
    super(props)
    this.state={
      personajes: []
    }
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/Card')
    .then(resp => resp.json())
    .then(data => this.setState({
      personajes: data.results,
      
    }))
    .catch(err => console.log(err))
  }


  render(){
    return (
      <>
        <h2>Personajes de películas</h2>
        <section className="card-container">
          {this.state.personajes.map((personaje, idx) => 
            <Card 
              key={`${Date.now()}-${idx}`}  
              info={personaje}
              borrar={(name)=> this.borrar(name)}
              favorito={(id)=> this.favorites(id)}
            />)}
        </section>
      </>
    )
  }
}

export default  List