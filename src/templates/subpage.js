import * as React from "react"
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import localize from "../components/localize";
import Text from "../components/MyPortableText";

export const query = graphql`
query($slug: String){
sanitySubpages(slug: {current: {eq: $slug}}) {
    headline{
    _type
    en
    de
    }
    _rawText
    seo_title{
    _type
    en
    de}
    seo_description{
    _type
    en
    de
    }
    seo_image{ asset {gatsbyImageData}}
  }
  allSanitySettings{
    edges {
        node{
            _rawCookietext
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

const SubPage = ({data, location}) => {

    const page = data.sanitySubpage;
    const settings = data.allSanitySettings.edges[0].node;
    const metadata = data.site.siteMetadata;

    return (
        <div>
            <Layout location={location} settings={settings} metadata={metadata}>
                <SEO />
                <div className="page">
                    <h1>{page.title}</h1>
                    <Text value={page._rawText}></Text>
                </div>
            </Layout>
        </div>
    )
}

export default localize(SubPage)
