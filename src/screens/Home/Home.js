import React, { Component } from 'react'
import List from '../../components/List/List'
import { ColorRing } from  'react-loader-spinner'


class Home extends Component {

  constructor(props) {
    super(props)
    this.state={
      topCharts:{},
      albums:{},
      ready:false

    }
  }

  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10')
    .then(resp => resp.json())
    // .then(data=>console.log(data))
    .then(data => this.setState({
      topCharts: data.data,
      ready:true
    }))
    
    .catch(err => console.log(err))
  }
  
  render() {
    return (
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
    )
  }
}

export default Home

