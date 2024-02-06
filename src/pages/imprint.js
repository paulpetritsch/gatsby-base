import * as React from "react"
import Layout from "../components/layout/Layout";
import SEO from "../components/helper/SEO";
import {graphql} from "gatsby";
import Text from "../components/helper/MyPortableText";
import localize from "../components/helper/localize";

export const query = graphql`
    {
        allSanityImpressum {
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

const ImprintPage = ({data, location}) => {

    const page = data.allSanityImpressum.edges[0].node;
    const settings = data.allSanitySettings.edges[0].node;
    const metadata = data.site.siteMetadata;

    return (<Layout location={location} settings={settings} metadata={metadata}>
        <SEO title={page?.seo?.seo_title} description={page?.seo?.seo_description} featuredImage={page?.seo?.seo_image}/>
        <div className="min-h-[calc(100vh-2rem)] flex flex-col justify-between">
            <div className="h-full pl-page tablet:pl-leftpage pr-page">
                <h1 className={"color-orange text-4xl"}>{page?.title.en}</h1>
                <div className="mt-5">
                    <Text value={page?._rawText}></Text>
                </div>
            </div>
        </div>
    </Layout>)
}

export default localize(ImprintPage)
