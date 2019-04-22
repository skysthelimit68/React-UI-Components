import React from 'react';
import './Footer.css';

const ContentFooter = () => {
    return (
        <div class="contentFooter">
            <div class="footerIcon">
                <i class="far fa-comment"></i>
                <div class="iconCounter" id="shareCount"></div>
            </div>
            <div class="footerIcon">
                <i class="fas fa-sync-alt"></i>
                <div class="iconCounter" id="shareCount">6</div>
            </div>
            <div class="footerIcon">
                <i class="far fa-heart"></i>
                <div class="iconCounter" id="heartCount">4</div>
            </div>          
            <div class="footerIcon"><i class="far fa-envelope"></i></div>
        </div>
    )
}

export default ContentFooter;
