import React, { Component } from 'react'
import './styles.css'
import { Link } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';
class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            textoBoton: 'Show more',
            favorito: false,
            backup: [],
        }
    }

    componentDidMount() {

        let storage = localStorage.getItem('favoritos')

        if (storage !== null) {
            let favoritos = JSON.parse(storage)
            let buscarFavorito = favoritos.find(id => id == this.props.info.id)

            if (buscarFavorito != null) {
                this.setState({
                    showMore: false,
                    textoBoton: 'Show more',
                    favorito: true,
                    backup: [],
                })
            }

        }

    }

    changeShowMore() {
        if (this.state.showMore) {
            this.setState({
                showMore: false,
                textoBoton: 'Show more'
            })
        } else {
            this.setState({
                showMore: true,
                textoBoton: 'Hide info'
            })
        }
    }

    favorito(id) {
        let storageFav = localStorage.getItem("favoritos")
        if (storageFav == null) {
            let idsArr = [id]
            let idsArrToString = JSON.stringify(idsArr)
            localStorage.setItem('favoritos', idsArrToString)
        } else {
            let storageParsed = JSON.parse(storageFav)
            storageParsed.push(id)
            let storageParsedToString = JSON.stringify(storageParsed)
            localStorage.setItem('favoritos', storageParsedToString)
        }
        this.setState({
            favorito: true
        })
    }

    sacarFavorito(id) {
        let storageFav = localStorage.getItem('favoritos')
        let favsParsed = JSON.parse(storageFav)
        let favsFiltered = favsParsed.filter(elm => elm !== id)
        let favsToString = JSON.stringify(favsFiltered)
        localStorage.setItem('favoritos', favsToString)
        this.setState({
            favorito: false
        })
        this.props.borrar(id)
    }

    backup() {
        this.setState({
            charts: this.state.backup
        })
    }

    render() {
        return (
            <div className="character-card">
                {
                    this.props.info.type === "track" ?
                        <Link to={`/SongDetail/${this.props.info.id}`}> <img className="foto" src={this.props.info.cover_big || this.props.info.album.cover_big} /> </Link>
                        :
                        <Link to={`/AlbumDetail/${this.props.info.id}`}> <img className="foto" src={this.props.info.cover_big || this.props.info.album.cover_big} /> </Link>
                }
                <h4>{this.props.info.title}</h4>
                {
                    this.state.showMore ?
                        <p>
                            Artist: {this.props.info.artist.name}
                            <br></br>
                            Ranking: {this.props.info.position}
                            <ReactAudioPlayer
                                src={this.props.info.preview}
                                controls
                            />
                        </p>
                        :
                        ''
                }

                <button className='button-10' onClick={() => this.changeShowMore()}>
                    {this.state.textoBoton}
                </button>

                {
                    this.state.favorito ?
                        <button className='button-10' onClick={(id) => this.sacarFavorito(this.props.info.id)}>Delete from favorites</button>
                        :
                        <button className='button-10' onClick={(id) => this.favorito(this.props.info.id)}>Add to favorites</button>
                }
                {/* <button onClick={() => this.props.borrar(this.props.info.id)}>Delete chart</button>  */}

            </div>



        )
    }
}

export default Card
