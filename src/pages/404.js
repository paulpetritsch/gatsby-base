import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {graphql} from "gatsby";
import localize from "../components/localize";

export const query = graphql`
{
allSanitySettings {
    edges{
        node{
            errortext{
                _type
                en
                de
            }
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

const NotFoundPage = ({data, location}) => {

    const page = data.allSanitySettings.edges[0].node;
    const metadata = data.site.siteMetadata;

  return (
      <Layout location={location} settings={page} metadata={metadata}>
        <SEO title={'404 | Website'}></SEO>
        <h1>404</h1>
        <p>{page.errortext}</p>
      </Layout>
  )
}

export default localize(NotFoundPage)
