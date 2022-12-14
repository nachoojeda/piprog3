import React, { Component } from 'react'
import './styles.css'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    prevenirRefresh(event){
        event.preventDefault()
    }

    controlarCambiosDelInput(event){
        this.setState({
          valorInput: event.target.value
        }, ()=> this.props.metodoQueBusca(this.state.valorInput))
    }


  render() {
    return (
      <form onSubmit={(event)=> this.prevenirRefresh(event)}>
        <input placeholder='Buscar' onChange={(event)=> this.controlarCambiosDelInput(event)} value={this.state.valorInput}/>
      </form>

      
    )
  }
}

export default  Search