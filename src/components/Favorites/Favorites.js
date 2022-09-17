import React, { Component } from 'react';
import Card from "../Card/Card";

class Favorites extends Component {
  constructor(props){
    super(props)
    this.state = {
        card:[]
    }
  }
  
  componentDidMount() {

    let storage = localStorage.getItem('Favorites')
    let cardArray = []
    let trackFavs = []

    if (storage !== null) {
      let favoritesToArray = JSON.parse(storage)
      cardArray = favoritesToArray}

    if (cardArray !==null) {
      cardArray.forEach(elm => {
        
        fetch(`https://api.deezer.com/track/${elm}`)
        .then(resp => resp.json())
        .then(data => {
            trackFavs.push(data);
            console.log(this.state.dataCard.length);
            this.setState({dataCard: trackFavs});
          
        })
        .catch(err => console.log('el error fue' + err))
      });
      
    }
       
   }
  
  render() {
    console.log(this.state.dataCard);
    return (
      <React.Fragment>
      <div>
          <h2 className="titulo"> Favorites</h2>
      </div>
      <section className='card-container'>
                    {this.state.dataCard.map((unCard, idx )=> <Card key={unCard + idx} data={unCard}  image={unCard.poster_path} title={unCard.title}/>)}
                    {/* nuevo estado de favoritos con la info de localstorage */}
                </section>
    )
    </React.Fragment>
    )
  }
}

export default Favorites
