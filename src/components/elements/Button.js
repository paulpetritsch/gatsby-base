import React from "react";
import {Link} from "gatsby";

const Button = ({link, title, type = 'internal', color = 'white', textType = 'h3', reverse = false}) => {
    if(type === 'external'){
        return (
            <a href={link} target={"_blank"} className={"hover:-translate-y-1 transition-all duration-300 ease-in-out block"}>
                {title}
            </a>
        )
    } else{
        return (
            <Link to={link} className={"hover:-translate-y-1 transition-all duration-300 ease-in-out block"}>
                {title}
            </Link>
        )
    }

}


export default Button
