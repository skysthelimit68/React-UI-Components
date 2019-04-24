import React from 'react';
import './Footer.css';

const ContentFooter = () => {
    let setHeartCount = 0;
    let setShareCount = 0;
    const updateHeart = () => {
        setHeartCount++;
        let heartIcon = document.querySelector(".fa-heart");
        document.getElementById("heartCount").textContent = setHeartCount;
        heartIcon.setAttribute("class","fas fa-heart i-active")
    }

    const updateShare = () => {
        setShareCount++;
        let shareIcon = document.querySelector(".fa-sync-alt");
        document.getElementById("shareCount").textContent = setShareCount;
        shareIcon.classList.add("i-active");
    }

    return (
        <div className="contentFooter">
            <div className="footerIcon">
                <i className="far fa-comment"></i>
                <div className="iconCounter"></div>
            </div>
            <div className="footerIcon">
                <i className="fas fa-sync-alt" onClick = {updateShare}></i>
                <div className="iconCounter" id="shareCount">{setShareCount}</div>
            </div>
            <div className="footerIcon">
                <i className="far fa-heart" onClick = {updateHeart} ></i>
                <div className="iconCounter" id="heartCount">{setHeartCount}</div>
            </div>          
                <div className="footerIcon">
                <i className="far fa-envelope"></i>
            </div>
        </div>
    )
}

export default ContentFooter;
