import React, {Component} from 'react'
import './styles.css'
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Show more',
            favorito:false,
            backup: [] ,
            // backupAlbum: []
        }
    }

    changeShowMore(){
        if(this.state.showMore){
            this.setState({
                showMore: false,
                textoBoton: 'Show more'
            })
        } else {
            this.setState({
                showMore: true,
                textoBoton: 'Hide info'
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

    //   backupAlbum(){
    //     this.setState({
    //       albums: this.state.backup
    //     })
    //   }
    

    render(){
        return (

            <div>
                <div className="character-card">

                <Link to='/SongDetail'> <img className="foto" src={this.props.info.album.cover_big} alt={`Una imagen de ${this.props.info.artist.name}`}/> </Link>
                    
                    <h4>{this.props.info.artist.name}</h4>
                    <p>{this.props.info.title}</p>


                    {
                    this.state.showMore ?
                        <p>
                           Album title: {this.props.info.album.title}
                        <br></br>
                       Duration: {this.props.info.duration} m
                        <br></br>
                       Ranking: {this.props.info.position - 12}
                        </p>
                        
                    : 
                    ''
                    }

                    <button>
                    <a onClick={
                        ()=> this.changeShowMore()
                    }>{this.state.textoBoton}</a></button>
                    {
                        this.state.favorito ?
                            <button onClick={(id)=> this.sacarFavorito(this.props.info.id)}>Delete from favorites</button>
                        :
                            <button onClick={(id)=> this.favorito(this.props.info.id)}>Add to favorites</button>
                    }
                    <button onClick={() => this.props.borrar(this.props.info.id)}>Delete chart</button>
                    
                </div>

{/* 
<div className="character-card">
<img 
    src={this.props.infoAlbum.cover_big
    }
    alt={`Una imagen de ${this.props.infoAlbum.artist.name}`}
/>
<h4>{this.props.infoAlbum.artist.name}</h4>
<p>{this.props.infoAlbum.title}</p>


{
this.state.showMore ?
    <p>
       Album title: {this.props.infoAlbum.album.title}
    
    </p>
    
: 
''
}

<button>
<a onClick={
    ()=> this.changeShowMore()
}>{this.state.textoBoton}</a></button>
{
    this.state.favorito ?
        <button onClick={(id)=> this.sacarFavorito(this.props.info.id)}>Delete from favorites</button>
    :
        <button onClick={(id)=> this.favorito(this.props.info.id)}>Add to favorites</button>
}
<button onClick={() => this.props.borrar(this.props.info.id)}>Delete chart</button>

</div> */}

</div>
        
            )
    }
}

export default Card
