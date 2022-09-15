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
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=12&limit=6')
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
