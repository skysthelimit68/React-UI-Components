import React from 'react';
import './Footer.css';

const ContentFooter = () => {
    return (
        <div className="contentFooter">
            <div className="footerIcon">
                <i className="far fa-comment"></i>
                <div className="iconCounter" id="shareCount"></div>
            </div>
            <div className="footerIcon">
                <i className="fas fa-sync-alt"></i>
                <div className="iconCounter" id="shareCount">6</div>
            </div>
            <div className="footerIcon">
                <i className="far fa-heart"></i>
                <div className="iconCounter" id="heartCount">4</div>
            </div>          
                <div className="footerIcon">
                <i className="far fa-envelope"></i>
            </div>
        </div>
    )
}

export default ContentFooter;
