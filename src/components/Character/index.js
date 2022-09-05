import React, {Component} from 'react'
import './styles.css'

class Character extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Ver mas',
            favorito:false
        }
    }

    changeShowMore(){
        if(this.state.showMore){
            this.setState({
                showMore: false,
                textoBoton: 'Ver más'
            })
        } else {
            this.setState({
                showMore: true,
                textoBoton: 'Ver menos'
            })
        }
    }

    favorito(id){
        let storageFav = localStorage.getItem("favoritos")
        if(storageFav == null){
            let idsArr = [id]
            let idsArrToString = JSON.stringify(idsArr)
            localStorage.setItem('favoritos', idsArrToString)
        } else{
            let storageParsed = JSON.parse(storageFav)
            storageParsed.push(id)
            let storageParsedToString = JSON.stringify(storageParsed)
            localStorage.setItem('favoritos', storageParsedToString)
        }
        this.setState({
            favorito: true
        })
    }

    sacarFavorito(id){
        let storageFav = localStorage.getItem('favoritos')
        let favsParsed = JSON.parse(storageFav)
        let favsFiltered = favsParsed.filter(elm => elm !== id)
        let favsToString = JSON.stringify(favsFiltered)
        localStorage.setItem('favoritos', favsToString)
        this.setState({
            favorito: false
        })
    }
    

    render(){
        return (
                <div className="character-card">
                    <img 
                        src={this.props.info.image}
                        alt={`Una imagen de ${this.props.info.name}`}
                    />
                    <h4>{this.props.info.name}</h4>
                    <p>Character description:</p>
                    <p>{this.props.info.status}</p>
                    <p>{this.props.info.species}</p>
                    {
                    this.state.showMore ?
                        <p>{this.props.info.extra}</p>
                    : 
                    ''
                    }
                    <a onClick={
                        ()=> this.changeShowMore()
                    }>{this.state.textoBoton}</a>
                    {
                        this.state.favorito ?
                            <button onClick={(id)=> this.sacarFavorito(this.props.info.id)}>Sacar Favorito</button>
                        :
                            <button onClick={(id)=> this.favorito(this.props.info.id)}>Favoritos</button>
                    }
                    <button onClick={() => this.props.borrar(this.props.info.id)}>borrar</button>
                </div>
        
            )
    }
}

export default Character
