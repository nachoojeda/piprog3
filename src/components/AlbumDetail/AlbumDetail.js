import React, { Component } from 'react'
import { ColorRing } from 'react-loader-spinner'
import ReactAudioPlayer from 'react-audio-player';

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
                            <div className='dive'>
                                <img className='fotoAlbum' src={this.state.albums.cover_big} />

                                <div className='dive2'>
                                    <h1 className='huno'>{this.state.albums.title} - {this.state.albums.artist.name}</h1>
                                    <ul>
                                        <h3 className='huno'>Canciones del album:</h3>
                                        {
                                            this.state.albums.tracks.data.map((track, i) => {
                                                return (<li><h5 className='huno'>
                                                    {++i}. {track.title} - {track.artist.name} ({track.duration}) <ReactAudioPlayer
                                                    src={track.preview}
                                                    controls
                                                />
                                                </h5>
                                                </li>)
                                            })
                                        }
                                    </ul>
                                </div>
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