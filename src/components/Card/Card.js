import React, {Component} from 'react'
import './styles.css'

class Card extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Show album title',
            favorito:false,
            backup: []
        }
    }

    changeShowMore(){
        if(this.state.showMore){
            this.setState({
                showMore: false,
                textoBoton: 'Show album title'
            })
        } else {
            this.setState({
                showMore: true,
                textoBoton: 'Hide album title'
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

    backup(){
        this.setState({
          charts: this.state.backup
        })
      }
    

    render(){
        return (
                <div className="character-card">
                    <img 
                        src={this.props.info.album.cover_big
                        }
                        alt={`Una imagen de ${this.props.info.artist.name}`}
                    />
                    <h4>{this.props.info.artist.name}</h4>
                    <p>{this.props.info.title}</p>


                    {
                    this.state.showMore ?
                        <p>{this.props.info.album.title}</p>
                    : 
                    ''
                    }


                    <a onClick={
                        ()=> this.changeShowMore()
                    }>{this.state.textoBoton}</a>
                    {
                        this.state.favorito ?
                            <button onClick={(id)=> this.sacarFavorito(this.props.info.id)}>Delete from favorites</button>
                        :
                            <button onClick={(id)=> this.favorito(this.props.info.id)}>Add to favorites</button>
                    }
                    <button onClick={() => this.props.borrar(this.props.info.id)}>Delete chart</button>
                    
                </div>
        
            )
    }
}

export default Card
