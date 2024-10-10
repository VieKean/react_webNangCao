import React from 'react';
import "../css/style.css"

const Infomation = ({ userName }) => {
    return (
        <div className="information"> {/* Apply information class */}
            Xin chào: {userName}
        </div>
    );
};

export default Infomation;