import React from 'react';
import './Header.css';
import moment from 'moment';


const HeaderTitle = () => {
    const date = moment().format("DD MMM")

    

    return (
        <div>
            <p className="heavyTitle">Lambda School <span className="handle">@LambdaSchool</span><span className="midDot">&middot;</span><span id="date">{date}</span></p>

        </div>
    )
}

export default HeaderTitle;
