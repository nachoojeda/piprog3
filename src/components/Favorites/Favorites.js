import React, { Component } from 'react'

class Favorites extends Component {
  constructor(props){
    super(props)
    this.state = {
        card:[]
    }
  }
  
  componentDidMount() {
    let storage = localStorage.getItem('Favorites')
    if (storage !== null) {
      let parsedStorage = JSON.parse(storage)
      parsedStorage.map(elm => {
        fetch(`https://api.deezer.com/track/${elm}`)
        .then(resp => resp.json())
        .then(data => this.setState({  
          
        }))
        .catch(err => console.log(err))
      })
    }
  }
  
  render() {
    return (
      <div>Favorites</div>
    )
  }
}

export default Favorites
