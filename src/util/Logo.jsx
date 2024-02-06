import * as React from "react";

function Logo({height = '20px', margin = '10px', color}) {
    return (
        <svg className={`inline`} style={{height: height, width: 'auto', marginBottom: margin, fill: color}} xmlns="http://www.w3.org/2000/svg">

        </svg>
    );
}

export default Logo;
