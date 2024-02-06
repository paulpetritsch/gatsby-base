import * as React from "react"
import Layout from "../components/layout/Layout";
import SEO from "../components/helper/SEO";
import {graphql} from "gatsby";
import Text from "../components/helper/MyPortableText";
import Footer from "../components/layout/Footer";
import Button from "../components/elements/Button";
import localize from "../components/helper/localize";

export const query = graphql`
    {
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
                    maintenance {
                        maintenance_seo_description
                        maintenance_seo_title
                        maintenancetitle
                        maintenancebutton {
                            title
                            link
                        }
                        _rawMaintenancetext
                    }
                    error{
                        title{
                            en
                            de
                            _type
                        }
                        _rawText
                        seo_title{
                            en
                            de
                            _type
                        }
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

const ErrorPage = ({data, location}) => {

    const settings = data.allSanitySettings.edges[0].node;
    const seo = data.allSanityStartseite.edges[0].node;

    return (<Layout location={location}>
        <SEO title={settings?.error?.seo_title} description={seo?.seo_description} featuredImage={seo?.seo_image}/>
        <div className="min-h-[calc(100vh-2rem)] flex flex-col justify-between">
            <div className="h-full pl-page tablet:pl-leftpage pr-page">
                <h1 className={"cirka color-orange text-4xl"}>{settings?.error?.title}</h1>
                <div className="mt-5">
                    <Text value={settings?.error?._rawText}></Text>
                </div>
                <div className="mt-5">
                </div>
            </div>
        </div>
    </Layout>)
}

export default localize(ErrorPage)
