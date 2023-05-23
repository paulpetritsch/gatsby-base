import React from "react";
import moment from "moment";

const Footer = ({location}) => {

    const today = moment();

    return (
        <footer className={"footer"}>
            <div className="inner">
                <div className="left">
                    <p className={"small"}>© {today.format('YYYY')} WEBSITE. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer
