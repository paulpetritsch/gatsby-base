import * as React from "react"
import Layout from "../components/layout/Layout";
import SEO from "../components/helper/SEO";
import {graphql} from "gatsby";
import Text from "../components/helper/MyPortableText";
import Footer from "../components/layout/Footer";
import localize from "../components/helper/localize";
import {useUserConsent} from "../util/UserConsentContext";
import {useEffect, useState} from "react";
import Cookies from 'js-cookie'

export const query = graphql`
    {
        allSanityDatenschutz {
            edges {
                node {
                    title{
                        en
                        de
                        _type
                    }
                    _rawText
                    seo{
                        seo_title{
                            en
                            de
                            _type
                        }
                        seo_description{
                            en
                            de
                            _type
                        }
                        seo_image{asset{gatsbyImageData}}
                    }
                }
            }
        }
        allSanityStartseite{
            edges{
                node{
                    seo{
                        seo_title{
                            en
                            de
                            _type
                        }
                        seo_description{
                            en
                            de
                            _type
                        }
                        seo_image{asset{gatsbyImageData}}
                    }
                }
            }
        }
        allSanitySettings {
            edges {
                node {
                    maintenance
                    {
                        maintenance_seo_description
                        maintenance_seo_title
                        maintenancetitle
                        maintenancebutton {
                            title
                            link
                        }
                        _rawMaintenancetext
                    }
                    email
                    telefon
                    sociallinks {
                        value
                        type
                    }
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
`;

const DatenschutzPage = ({data, location}) => {

    const page = data.allSanityDatenschutz.edges[0].node;
    const settings = data.allSanitySettings.edges[0].node;

    const [showCookieBanner, setShowCookieBanner] = useState(false);

    const { consent, setConsent } = useUserConsent();
    const [ localConsent, setLocalConsent ] = useState(consent);

    useEffect(() => {
        const savedConsent = Cookies.get('eniosol-cookie-consent');
        if (savedConsent) {
            const consentObject = JSON.parse(savedConsent);
            setLocalConsent(consentObject);
        }
    }, []);

    const handleConsent = () => {
        Cookies.set('eniosol-cookie-consent', JSON.stringify(localConsent), { expires: 365 });
        setShowCookieBanner(false);
        setConsent(localConsent);
        if (!localConsent.marketing) {
            window.location.reload();
        }
    };

    const handleConsentAll = () => {
        setConsent({...consent, marketing: true});
        setLocalConsent({...localConsent, marketing: true});
        Cookies.set('eniosol-cookie-consent', JSON.stringify(localConsent), { expires: 365 });
        setShowCookieBanner(false);
    };

    return (<Layout location={location}>
        <SEO title={page?.seo?.seo_title} description={page?.seo?.seo_description} featuredImage={page?.seo?.seo_image}/>
        <div className="min-h-[calc(100vh-2rem)] flex flex-col justify-between">
            <div className="h-full pl-page tablet:pl-leftpage pr-page">
                <h1 className={"cirka color-orange text-4xl"}>{page?.title.en}</h1>
                <div className="mt-5">
                    <Text value={page?._rawText}></Text>
                </div>
            </div>
        </div>
        <div className="blog__content">
            <div className="cookiebanner_alt fixed z-[100] inset-0 backdrop-blur-lg">
                <div className="cookiebanner__inner fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] p-5 bg-lighterGrey rounded-xl border border-darkBlue">
                    <h6 className="cookiebanner__headline uppercase">Cookie Einstellungen</h6>
                    <p className="cookiebanner__text">
                        Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Durch die Nutzung unserer Website stimmen Sie allen Cookies gemäß unserer Datenschutzrichtlinie zu.
                    </p>
                    <div className="acceptancecontainer cookiebanner__acceptance technisch">
                        <label className="cbcontainer">
                            <input type="checkbox" id={"technical"} checked={consent.technical} disabled={true}/>
                            <span className="checkmark hover-moveup" id="dsgvocircle"></span>
                        </label>
                        <p className="smalltext">
                            Technisch
                        </p>
                    </div>
                    <div className="acceptancecontainer cookiebanner__acceptance">
                        <label className="cbcontainer">
                            <input type="checkbox" id={"marketing"} checked={localConsent.marketing} onChange={() => setLocalConsent({...localConsent, marketing: !localConsent.marketing})}/>
                            <span className="checkmark hover-moveup" id="dsgvocircle"></span>
                        </label>
                        <p className="smalltext">
                            Marketing
                        </p>
                    </div>
                    <div className="cookiebanner__btns">
                        <div onClick={handleConsent} className="btn white outline landingbtn smalltext bold uppercase">
                            Auswahl Speichern
                        </div>
                        <div onClick={handleConsentAll} className="btn filled white landingbtn smalltext bold uppercase">
                            Alle Akzeptieren
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>)
}

export default localize(DatenschutzPage)
