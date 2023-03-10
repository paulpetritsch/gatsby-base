import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {graphql} from "gatsby";
import localize from "../components/localize";
import Text from "../components/MyPortableText";

export const query = graphql`
{
allSanityStartseite {
edges {
node {
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

    const page = data.allSanityStartseite.edges[0].node;
    const settings = data.allSanitySettings.edges[0].node;
    const metadata = data.site.siteMetadata;

  return (
      <Layout location={location} settings={settings} metadata={metadata}>
          <div className={"page"}>
              <div className="inner">
                  <SEO title={page.seo_title} description={page._rawSeo_description} image={page.seo_image}></SEO>
                  <h1>{page.headline}</h1>
                  <Text value={page._rawText}></Text>
              </div>
          </div>
      </Layout>
  )
}

export default localize(IndexPage)
