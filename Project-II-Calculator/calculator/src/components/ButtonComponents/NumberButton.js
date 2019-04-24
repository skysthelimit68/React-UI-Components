import React from 'react';
import './Button.css';


const NumberButton = (props) => {
    return (
        <button className = {props.buttonStyle} onClick = {props.onClick}>
        {props.value}
        </button> 
    )
}

export default NumberButton;
