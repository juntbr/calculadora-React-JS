import React from 'react' 
import './Display.css'

export default props => {
    return (
        <div className="Display">
            <input type="text" value={props.valor} readOnly></input>
        </div>
    ) 
}