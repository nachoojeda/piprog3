import React, { Component } from 'react'
import Card from '../Card/Card'
import { ColorRing } from 'react-loader-spinner'
import ReactPlayer from 'react-player/youtube'
import List from '../List/List'

import './styles.css'

class AlbumDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            albums: {},
            ready: false

        }
    }
    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)

            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    albums: data,
                    ready: true
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <section className="card-container">
                <div>
                    {
                        this.state.ready ?
                            <div>
                                <img src={this.state.albums.cover_big} />
                                <h1>{this.state.albums.title}</h1>
                                <h3>{this.state.albums.artist.name}</h3>
                               
                                <ul>
                                <h1>Canciones del album:</h1>
                                    {
                                        this.state.albums.tracks.data.map((track, i) => {
                                            return (<li>{++i}. {track.title} - {track.artist.name} ({track.duration})</li>)
                                        })
                                    }
                                </ul>


                                <ReactPlayer url='{this.state.songs.preview}' />




                            </div>

                            : <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />

                    }

                </div>

            </section>
        )
    }
}

export default AlbumDetails