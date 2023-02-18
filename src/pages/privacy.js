import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {graphql} from "gatsby";
import localize from "../components/localize";
import Text from "../components/MyPortableText";

export const query = graphql`
{
allSanityDatenschutz {
edges {
node {
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
  }
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

const IndexPage = ({data, location}) => {

    const page = data.allSanityDatenschutz.edges[0].node;
    const settings = data.allSanitySettings.edges[0].node;
    const metadata = data.site.siteMetadata;

  return (
      <Layout location={location} settings={settings} metadata={metadata}>
          <SEO title={page.seo_title} description={page._rawSeo_description} image={page.seo_image}></SEO>
          <Text value={page._rawText}></Text>
      </Layout>
  )
}

export default localize(IndexPage)
