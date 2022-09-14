import React, { Component } from 'react'
import Card from '../Card/Card'
import './styles.css'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            songs: {},

        }
    }
    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)

            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    songs: data,
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <section className="card-container">
          {this.state.songs.map((chart, idx) => 
            <Card 
              key={`${Date.now()}-${idx}`}  
              info={chart}
              borrar={(name)=> this.borrar(name)}
              favorito={(id)=> this.favorites(id)}
            />)}

            <button onClick={()=> this.backup()}>Volver atras</button> 
            
        </section>
        )
    }
}

export default Details