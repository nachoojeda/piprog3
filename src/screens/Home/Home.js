import React, { Component } from 'react'
import List from '../../components/List/List'
import { ColorRing } from  'react-loader-spinner'
import Results  from '../../components/Results/Results';
import Card from '../../components/Card/Card';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state={
      topCharts:{},
      albums:{},
      ready:false

    }
  }

  buscarData(valor){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${valor}`)
    .then (resp=> resp.json())
    .then(data=> {
      console.log(data)
      this.setState({
        resultadosBusqueda:data.data,
        ready: true
      })
    })
    .catch(err=> console.log(err))
  }

  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=12')
    .then(resp => resp.json())
    // .then(data=>console.log(data))
    .then(data => {
      console.log(data)
      this.setState({
      topCharts: data.data,
      ready:true
    })})
    
    .catch(err => console.log(err))
  }

  // componentDidMount() {
  //   fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums')
  //   .then(resp => resp.json())
  //   // .then(data=>console.log(data))
  //   .then(data => {
  //     console.log(data)
  //     this.setState({
  //     topAlbums: data.data,
  //     ready:true
  //   })})
    
  //   .catch(err => console.log(err))
  // }

  
  render() {
    return (
<>
      <Results metodoQueBusca ={(valor)=> this.buscarData(valor)} />
      
      {
            this.state.readyResultados
            ?
            <Card esBusqueda={true} info={this.state.resultadosBusqueda} />
            : ''
      }

      <div>
          {
          this.state.ready ? 
        <div> 
          <List info={this.state.topCharts}/>
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

