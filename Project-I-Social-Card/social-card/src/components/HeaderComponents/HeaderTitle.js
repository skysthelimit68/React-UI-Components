import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div>
            <p class="heavyTitle">Lambda School <span class="handle">@LambdaSchool</span><span class="midDot">&middot;</span><span id="date">Date</span></p>
        </div>
    )
}

export default HeaderTitle;
