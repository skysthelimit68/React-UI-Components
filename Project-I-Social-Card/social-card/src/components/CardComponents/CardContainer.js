import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className="cardContainer">
            <a href="https://reactjs.org" target="_blank">
                <CardBanner />
                <CardContent />
            </a>
        </div>
    )
}

export default CardContainer;