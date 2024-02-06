import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import Navigation from "../components/layout/Navigation";
import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/helper/SEO";
import {graphql, StaticQuery} from "gatsby";
import MyPortableText from "../components/helper/MyPortableText";
import "../styles/global.scss";
import {UserConsentProvider} from "../util/UserConsentContext";
import GoogleTag from "../components/analytics/GoogleTag";
import CookieConsent from "../components/popups/CookieConsent";
import localize from "../components/helper/localize";

const Layout = ({children, location, data}) => {

    const staticSettings = data?.allSanitySettings?.edges[0]?.node;
    const metadata = data.site.siteMetadata;
    const [productionPage, setProductionPage] = useState(true);

    useEffect(() => {
        if (location.pathname !== ('/')){
            setProductionPage(false);
        }
    }, [location]);

    if (staticSettings?.maintenance && productionPage) {
        return (<>
            <SEO title={staticSettings?.maintenance_seo_title} description={staticSettings?.maintenance_seo_description} location={location}></SEO>
            <div className={"maintenance top-0 left-0 h-screen w-screen bg-white flex justify-center items-center flex-col px-10"} style={{
                height: '100vh',
                width: '100vw'
            }}>
                <div className="reveal mx-page">
                    <h1 className={`font-serif italic font-bold text-4xl medium:text-5xl tablet:text-7xl z-10 relative mb-5 center-aligned reveal`}>{staticSettings?.maintenancetitle}</h1>
                </div>
                <div className={"text-center mx-page max-w-[10px] reveal"}>
                    <MyPortableText value={staticSettings?._rawMaintenancetext}></MyPortableText>
                </div>
                <div className={"flex justify-center reveal mt-5 mx-page"}>
                    <a href={staticSettings?.maintenancebutton?.link} className={`nav-link h-7 block font-bold text-black dark:text-white border-2 border-black dark:border-white rounded-full px-3 transition-all ease-in-out duration-500 hover:bg-black hover:text-white`}>{staticSettings?.maintenancebutton?.title}</a>
                </div>
            </div>
        </>)
    }
    else{
        return (
            <div>
                <UserConsentProvider>
                <GoogleTag/>
                <CookieConsent/>
                <Navigation settings={staticSettings} metadata={metadata} location={location}></Navigation>
                <PageTransition location={location}>
                    {children}
                </PageTransition>
            </UserConsentProvider>
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired, data: PropTypes.shape({
        allSanitySettings: PropTypes.shape({
            edges: PropTypes.shape({
                node: PropTypes.shape({
                    maintenance: PropTypes.string.isRequired,
                }),
            }).isRequired,
        }).isRequired,
    }).isRequired,
}


// 👇 Query component
export default function myLayout(props) {
    return (<StaticQuery
        query={graphql`
        query SiteTitleQuery {
          allSanitySettings{
                edges {
                    node {
                        maintenance{
                         maintenance_seo_description
                        maintenance_seo_title
                        maintenancetitle
                        maintenancebutton {
                            title
                            link
                        }
                        _rawMaintenancetext
                        }
                      
                        address_street
                        address_nr
                        address_plz
                        address_ort
                        sociallinks{
                            value
                            title
                            type
                        }
                        email
                    }
                }
            }
            site{
            siteMetadata{
                lang{
                    _type
                    en
                    de
                }
            }
        }
        }
      `}
        render={data => <Layout data={data} {...props} />}
    />);
}
