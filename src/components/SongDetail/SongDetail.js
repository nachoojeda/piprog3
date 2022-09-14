import React, {Component} from 'react'


class Details extends Component {
    constructor(props){
        super(props)
        this.state={
            id: props.match.params.id,
            songs:{}
        }
    } 
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/:${this.state.id}`)
        
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          this.setState({
          songs: data,
        })})
        .catch(err => console.log(err))
      }
    
    render(){
        return (
            <div>
           <image src={this.state.songs.md5_image
}></image>
            </div>
        )
    }
}

export default Details