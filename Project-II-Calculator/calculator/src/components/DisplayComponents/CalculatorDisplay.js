import React from 'react';
import './Display.css';


const Display = (props) => {
    return (
        <div className="display grid-4">
            {props.value}
        </div>
        
    )
}


export default Display;