import React, {useEffect} from "react";
import MyPortableText from "./MyPortableText";
import {graphql, useStaticQuery} from "gatsby";

const DatenschutzAcceptance = ({location}) => {

    const {text, accept} = useStaticQuery(graphql`
    query Datenschutztext {
      allSanitySettings{
        edges {
         node {
            _rawCookietext
         }
        }
      }
      site {
        siteMetadata{
            accept{
            _type
            en
            de
            }
        }
      }
    }
  `);

    const closePopup = () => {
        let cookie = getCookie("cookies");
        if (cookie !== "") {

        } else {
            setCookie("cookies", true, 365);
        }
        document.querySelector(".datenschutzacceptance").classList.add("inactive");
        setTimeout(() => {
            document.querySelector(".datenschutzacceptance").style.display = "none"
        }, 500)
    };

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    useEffect(() => {
        if(getCookie('cookies') === ""){
            document.querySelector(".datenschutzacceptance").style.display = "block"
        }
    })

    return (
        <div className={`datenschutzacceptance`}>
            <div className={`inner`}>
                <MyPortableText value={text}></MyPortableText>
                <div className="btn__container">
                    <div className={`btn btn-small btn-grotesk acceptance-btn`} onClick={() => {closePopup()}}>{accept}</div>
                </div>
            </div>
        </div>
    )
}


export default DatenschutzAcceptance

