import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Footer from "./Footer";
import DatenschutzAcceptance from "./DatenschutzAcceptance";
import {graphql, useStaticQuery} from "gatsby";

const Content = styled.div`
`

const Layout = ({children, location, settings, metadata}) => {

    const {allSanitySettings} = useStaticQuery(graphql`
        query siteSettings {
            allSanitySettings{
                edges {
                    node {
                        maintenance
                    }
                }
            }
        }
    `)

    const [animatedElements, setAnimatedElements] = useState([]);
    const [maintenanceMode, setMaintenanceMode] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("Entry is visible");
                    /*if(entry.target.classList.contains('animated-light')){
                        entry.target.classList.add('reveal-block-light')
                    }
                    entry.target.classList.add('reveal-block-fast');*/
                    entry.target.classList.add('reveal');
                }
            });
        }, {
            root: null, rootMargin: "0px", threshold: 0.5,
        });

        const elements = document.querySelectorAll(".is-animated");
        setAnimatedElements(Array.from(elements));

        elements.forEach((element) => {
            observer.observe(element);
        });

        let domain = window.location.hostname;

        if (domain === '' || domain === '') {
            setMaintenanceMode(true);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (<div className={"layout"}>
            <div className="smooth-viewport">
                <div className="smooth-container">
                    {allSanitySettings.edges[0].node.maintenance && maintenanceMode ? <div className={"maintenance "}>
                        <h1 className={"center-aligned"}>Diese Website befindet sich im Wartungsmodus.</h1>
                    </div> : <></>}
                    <DatenschutzAcceptance location={location} cookie={settings.cookies}></DatenschutzAcceptance>
                    <Navigation location={location} settings={settings} metadata={metadata}></Navigation>
                    <Content>
                        {children}
                    </Content>
                    <Footer location={location}></Footer>
                </div>
            </div>
        </div>)
}

export default Layout
