import {useStaticQuery, graphql} from 'gatsby';
import * as React from 'react';
import {Helmet} from 'react-helmet';

export default function SEO(props) {

    const {site, featuredImage, allSanityStartseite} = useStaticQuery(graphql`
    query SeoMetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
          og {
            siteName
          }
        }
      }
      featuredImage: file(
        absolutePath: { glob: "**/src/images/og-image.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200)
        }
      }
        allSanityStartseite{
            edges {
                node {
                    seo{
                        seo_title{
                            _type
                            en
                            de
                        }
                        seo_image {asset{gatsbyImageData}}
                        seo_description{
                            _type
                            en
                            de
                        }
                    }
                }
            }
        }
    }
  `);
    const seo = allSanityStartseite?.edges[0]?.node;
    const ogImage =
        props.featuredImage?.asset?.gatsbyImageData ?? seo?.seo_image?.asset?.gatsbyImageData ??featuredImage?.childImageSharp?.gatsbyImageData;
    const title = props.title ?? seo?.seo_title ?? site?.siteMetadata?.title;
    const description = props.description ?? seo?.seo_description ?? site?.siteMetadata?.description;
    const location = props.location;

    const metas = [
        {
            name: 'description',
            content: description,
        },
        /*{
            name: 'og:image',
            content: ogImage.images.fallback.src,
        },
        {
            name: 'og:image:width',
            content: `${ogImage.width}`,
        },
        {
            name: 'og:image:height',
            content: `${ogImage.height}`,
        },*/
        {
            name: 'og:type',
            content: 'website',
        },
        {
            name: 'og:title',
            content: title,
        },
        {
            name: 'og:description',
            content: description,
        },
        {
            name: 'og:site_name',
            content: site.siteMetadata.og.siteName,
        },
        {
            name: 'og:url',
            content: `${site?.siteMetadata?.siteUrl}${location.pathname}`,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:title',
            content: title,
        },
        /*{
            name: 'twitter:image',
            content: ogImage.images.fallback.src,
        }*/
    ];

    if (props.keywords) {
        metas.push({
            name: 'keywords',
            content: props.keywords,
        });
    }

    return (
        <Helmet>
            <html lang="de"/>
            <meta charSet="utf-8"/>
            <title>{title}</title>
            {metas.map(meta => (
                <meta key={meta.name} name={meta.name} content={meta.content}/>
            ))}
        </Helmet>
    );
}
