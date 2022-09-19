import React, { Component } from 'react';
import Card from "../../components/Card/Card";
import List from '../../components/List/List';

class Favorites extends Component {
  constructor(props){
    super(props)
    this.state = {
        favorites: []
    }
  }
  
  componentDidMount() {

    let storage = localStorage.getItem('favoritos')
    
    if (storage !== null) {
      let trackFavs = []
      let favorites = JSON.parse(storage)

      Promise.all(favorites.map(element => {
        return fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${element}`)
                .then(resp => resp.json())
      }))
      .then(data => {
        let filterError = data.filter(artist => !artist?.error)
        this.setState({favorites: filterError})
      })
      .catch(error => console.log(error))
    }
       
   }

   borrar(id){
    let arrayFiltrado = this.state.favorites.filter(chart => chart.id !== id)
    this.setState({
      favorites: arrayFiltrado
    })
  }
  
  render() {
    return (
      <div>
        <h1 className='titulo'>Favorites</h1>
          <section className="card-container">
          {
            this.state.favorites.map((chart, idx) =>
              <Card
                key={`${Date.now()}-${idx}`}
                info={chart}
                borrar={(id) => this.borrar(id)}
                favorito={(id) => {}}
              />
            )
          }

        </section>
      </div>
    )
  }
}

export default Favorites
