import React, { Component } from 'react'
import Card from '../Card/Card'
import { ColorRing } from 'react-loader-spinner'
import './styles.css'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            songs: {},
            ready: false

        }
    }
    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)

            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    songs: data,
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
                                <h1>{this.state.songs.title}</h1>
                                <h3>{this.state.songs.duration}</h3>
                                <img src={this.state.songs.md5_image} />
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

export default Details