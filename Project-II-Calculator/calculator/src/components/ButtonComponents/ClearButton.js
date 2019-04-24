import React from 'react';
import './Button.css';

const ClearButton = (props) => {
    return (
        <button className = {props.buttonStyle} onClick = {props.onClick}>
        {props.value}
        </button> 
    )
}

export default ClearButton;