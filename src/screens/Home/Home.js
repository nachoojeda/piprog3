import React, { Component } from 'react'
import List from '../../components/List/List'
import { ColorRing } from 'react-loader-spinner'
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import { Link } from "react-router-dom";
import './styles.css'


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      resultadosBusqueda: [],
      resultados: []
    }
  }

  buscarData(valor) {
    if(valor !== '') {
      fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${valor}`)
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            resultadosBusqueda: data.data,
            ready: this.state.ready,
            resultados: this.state.resultados 
          })
        })
        .catch(err => console.log(err))
    }
    else{
      this.setState({
        resultadosBusqueda: [],
        ready: this.state.ready,
        resultados: this.state.resultados
      })
    }
  }

  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart?/0/tracks?offset=10&index=12')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          ready: true,
          resultadosBusqueda: [],
          resultados: data
        })
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <>
        <Search metodoQueBusca={(valor) => this.buscarData(valor)} />

        {
          this.state.resultadosBusqueda.length > 0
            ?
            <>
              <h1 className='titulo'>Resultados</h1>
              <section className="card-container">
                {this.state.resultadosBusqueda.map((chart, idx) => <Card
                  key={`${Date.now()}-${idx}`}
                  info={chart}
                  borrar={(name) => this.borrar(name)}
                  favorito={(id) => this.favorites(id)}
                />)}
              </section>
            </>
            : ''
        }

        <div>
          {
            this.state.ready ?
              <div>
                <List className='pepe' info={this.state.resultados.tracks.data} titulo={'Top Charts'} />

                <button className='button-71' onClick={() => this.verTodas()}>
                  <Link to='/Every' > Ver todas las canciones </Link>
                </button>

                <List className='pepe'info={this.state.resultados.albums.data} titulo={'Top Albums'} />
                <button className='button-71' onClick={() => this.verTodas()}>
                  <Link to='/EveryAlbum' > Ver todos los albumes </Link>
                </button>
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
      </>
    )
  }
}

export default Home

