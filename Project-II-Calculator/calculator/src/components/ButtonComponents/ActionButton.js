import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
        <div className="grid-1">
            <button className="buttons func grid-4">÷</button>
            <button className="buttons func grid-4">×</button>
            <button className="buttons func grid-4">−</button>
            <button className="buttons func grid-4">+</button>
            <button className="buttons func grid-4">=</button>
        </div>
    )
}

export default ActionButton;