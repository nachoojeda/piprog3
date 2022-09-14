import React, { Component } from 'react'
import List from '../../components/List/List'
import { ColorRing } from  'react-loader-spinner'
import Results  from '../../components/Results/Results';
import Card from '../../components/Card/Card';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state={
      result: {},
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
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart?/0/tracks?index=10')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({
      result: data,
      ready:true
    })})
    
    .catch(err => console.log(err))
  }


  
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
          <List info={this.state.result.tracks.data} titulo={'Top Charts'}/>
          {/* <List info={this.state.result.albums.data} titulo={'Top Albums'}/> */}
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

