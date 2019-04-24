import React from 'react';
import './Button.css';


const ActionButton = (props) => {
    return (
        <button className = "buttons func grid-4" onClick = {props.onClick}>
            {props.value}
        </button> 
    )
}

export default ActionButton;