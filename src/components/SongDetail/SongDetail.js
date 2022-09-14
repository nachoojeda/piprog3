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
                <div>
                    <h1>{this.state.songs.title}</h1>
                    <h3>{this.state.songs.duration}</h3>
                    <img src={this.state.songs.md5_image} />
                </div>
                
            </section>
        )
    }
}

export default Details