import * as React from "react"
import {graphql} from "gatsby";
import Layout from "../components/layout/Layout";
import SEO from "../components/helper/SEO";
import localize from "../components/helper/localize";
import Text from "../components/helper/MyPortableText";

export const query = graphql`
    query($slug: String){
        sanitySubpages(slug: {current: {eq: $slug}}) {
            headline{
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
                    de
                }
            }
        }
    }
`;

const SubPage = ({data, location}) => {

    const page = data.sanitySubpage;
    const settings = data.allSanitySettings.edges[0].node;
    const metadata = data.site.siteMetadata;

    return (<div>
            <Layout location={location} settings={settings} metadata={metadata}>
                <SEO title={page.seo?.seo_title} description={page.seo?.seo_description} image={page.seo?.seo_image} location={location}></SEO>
                <div className="page">
                    <h1>{page.title}</h1>
                    <Text value={page._rawText}></Text>
                </div>
            </Layout>
        </div>)
}

export default localize(SubPage)
