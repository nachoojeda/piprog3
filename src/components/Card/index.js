import React from 'react'
import './styles.css'

function Card() {
    
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
             
                </div>
        
            )
    
} 

export default Card
