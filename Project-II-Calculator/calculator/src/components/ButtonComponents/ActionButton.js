import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
        <div class="grid-1">
            <button class="buttons func grid-4">/</button>
            <button class="buttons func grid-4">X</button>
            <button class="buttons func grid-4">-</button>
            <button class="buttons func grid-4">+</button>
            <button class="buttons func grid-4">=</button>
        </div>
    )
}

export default ActionButton;