import * as React from "react"
import Layout from "../components/layout/Layout";
import SEO from "../components/helper/SEO";
import {graphql} from "gatsby";
import localize from "../components/helper/localize";
import Text from "../components/helper/MyPortableText";

export const query = graphql`
    {
        allSanityDatenschutz {
            edges {
                node {
                    title{
                        _type
                        en
                        de
                    }
                    _rawText
                    seo{
                        seo_title {
                            _type
                            en
                            de
                        }
                        seo_description {
                            _type
                            en
                            de
                        }
                        seo_image{asset{gatsbyImageData}}
                    }
                }
            }
        }
        allSanitySettings{
            edges {
                node{
                    cookies{
                        title{
                            _type
                            en
                            de
                        }
                        _rawText
                    }
                }
            }
        }
        site{
            siteMetadata{
                lang{
                    _type
                    en
                    de}
            }
        }
    }
`;

const PrivacyPage = ({data, location}) => {

    const page = data.allSanityDatenschutz.edges[0].node;
    const settings = data.allSanitySettings.edges[0].node;
    const metadata = data.site.siteMetadata;

    return (<Layout location={location} settings={settings} metadata={metadata}>
        <SEO title={page.seo?.seo_title} description={page.seo?.seo_description} image={page.seo?.seo_image} location={location}></SEO>
            <h1>{page.title}</h1>
            <Text value={page._rawText}></Text>
        </Layout>)
}

export default localize(PrivacyPage)
