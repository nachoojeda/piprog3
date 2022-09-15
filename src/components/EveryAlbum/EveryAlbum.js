import React, { Component } from 'react'
import Card from '../Card/Card'
import { ColorRing } from 'react-loader-spinner'
class Every extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charts: [],
      backup: [],
      favorito: [],
      ready:false
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

  cargarMas(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?offset=12&limit=18`)
    .then(resp => resp.json())
    .then(data => this.setState({
      charts: this.state.charts.concat(data.data),
    }))
    .catch(err => console.log(err))

  }
  render() {
    return (
      <>

        <div>
          {
            this.state.ready ?
              <div>
                <h1 className='titulo'>Todas las canciones</h1>
                <section className="card-container">
                  {this.state.charts.map((chart, idx) =>
                    <Card
                      key={`${Date.now()}-${idx}`}
                      info={chart}
                      borrar={(name) => this.borrar(name)}
                      favorito={(id) => this.favorites(id)}
                    />)}


                </section>
                <button onClick={()=> this.cargarMas()}>Cargar mas</button>
                <button className='boton' onClick={() => this.backup()}>Volver atras</button>
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

export default Every
