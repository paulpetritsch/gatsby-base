import * as React from "react"
import Layout from "../components/layout/Layout";
import SEO from "../components/helper/SEO";
import {graphql} from "gatsby";
import localize from "../components/helper/localize";

export const query = graphql`
    {
        allSanitySettings {
            edges{
                node{
                    error{
                        seo_title{
                            _type
                            en
                            de
                        }
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

const NotFoundPage = ({data, location}) => {

    const page = data.allSanitySettings.edges[0].node;
    const metadata = data.site.siteMetadata;

    return (<Layout location={location} settings={page} metadata={metadata}>
            <SEO title={"Error"} location={location}></SEO>
            <h1>404 Error</h1>
        </Layout>)
}

export default localize(NotFoundPage)
