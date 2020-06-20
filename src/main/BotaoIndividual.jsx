import React from 'react'
import './BotaoIndividual.css'

export default props => {

    return( 
        <div>            
            <button className="button" onClick={e => props.func && props.func(props.label)}>{props.label}</button>
        </div>
    )

}