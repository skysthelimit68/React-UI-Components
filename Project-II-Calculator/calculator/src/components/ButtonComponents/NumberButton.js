import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
        <div class="grid-3 numberButton">
            <button class="buttons num grid-4">clear</button>
            <div class="buttonRow">
                <button class="buttons num button3">7</button>
                <button class="buttons num button3">8</button>
                <button class="buttons num button3">9</button>
            </div>
            <div class="buttonRow">
                <button class="buttons num button3">5</button>
                <button class="buttons num button3">6</button>
                <button class="buttons num button3">7</button>
            </div>
            <div class="buttonRow">
                <button class="buttons num button3">1</button>
                <button class="buttons num button3">2</button>
                <button class="buttons num button3">3</button>
            </div>
            <button class="buttons num grid-4">0</button>
        </div>
    )
}

export default NumberButton;
