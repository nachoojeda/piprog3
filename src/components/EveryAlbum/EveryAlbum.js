import React, { Component } from 'react'
import Card from '../Card/Card'
import { ColorRing } from 'react-loader-spinner'
import Search from '../../components/Search/Search';

class EveryAlbum extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charts: [],
      backup: [],
      favorito: [],
      ready: false,
      index: 22,
      resultadosBusqueda: [],
      resultados: []
    }
  }
  buscarData(valor) {
    if(valor !== '') {
      fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/album?q=${valor}`)
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
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=12&limit=10')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({
          charts: data.data,
          backup: data.data,
          ready: true
        })
      })

      .catch(err => console.log(err))
  }
  borrar(id) {
    let arrayFiltrado = this.state.charts.filter(chart => chart.id !== id)
    this.setState({
      charts: arrayFiltrado
    })
  }

  backup() {
    this.setState({
      charts: this.state.backup
    })
  }

  cargarMas() {
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?offset=1&limit=18&index=${this.state.index}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        charts: this.state.charts.concat(data.data),
        index: this.state.index + 18
      }))
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
                <h1 className='titulo'>Todos los albumes</h1>
                <section className="card-container">
                  {this.state.charts.map((chart, idx) =>
                    <Card
                      key={`${Date.now()}-${idx}`}
                      info={chart}
                      borrar={(name) => this.borrar(name)}
                      favorito={(id) => this.favorites(id)}
                    />)}


                </section>
                <div className='divevery'>
                <button className='button-71' onClick={() => this.cargarMas()}>Cargar mas</button>
                <button className='button-71' onClick={() => this.backup()}>Volver atras</button>
                </div>
              </div>

              :
              <div className='loader'>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
              </div>

          }

        </div>













      </>
    )
  }
}

export default EveryAlbum
