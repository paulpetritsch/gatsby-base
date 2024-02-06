import React, {useRef, useState} from "react";
import Icon from "../helper/Icon";
import {Link} from "gatsby";
import styled from "styled-components";
import {navigate} from 'gatsby';

const Menu = styled.div`
    display: ${({nav}) => (nav ? "flex" : "none")} !important;
`

const Navigation = ({location, settings, metadata}) => {

    const [nav, changeNavState] = useState(false);

    const menuRef = useRef();

    const changeNav = () => {
        if (nav) {
            document.body.classList.remove("stop-scrolling");
            menuRef.current.classList.add('fade-out');

            setTimeout(() => {
                changeNavState(false);
                if (menuRef.current) {
                    menuRef.current.classList.remove('fade-out');
                }
            }, 300)
        } else {
            document.body.classList.add("stop-scrolling");
            changeNavState(true);
        }
    }
    return (
        <div>
            <nav className={"navigation"}>
                <div className={`left`}>
                    <div className={`lang__container`}>
                        {metadata.lang === 'EN' ?
                            <Link to={location.pathname === "/" ? "/en/" : "/en" + location.pathname} className={"hover-moveup"}>{metadata.lang.de}</Link> :
                            <Link to={location.pathname === "/en/" ? "/" : location.pathname.replace('/en', '')} className={"hover-moveup"}>{metadata.lang.en}</Link>}
                    </div>
                </div>
                <div className={`center`}>

                </div>
                <div className={`right`}>
                    <div className={nav ? "burger close" : "burger"} onClick={() => {
                        changeNav();
                    }}>
                        <div className={"line bg-dark"}></div>
                        <div className={"line bg-dark"}></div>
                        <div className={"line bg-dark"}></div>
                    </div>
                </div>
                <Menu className={`menu fade-in`} nav={nav} ref={menuRef}>
                    <div className="menu__link__container">

                    </div>
                </Menu>
            </nav>
        </div>
    )
}
export default Navigation;
