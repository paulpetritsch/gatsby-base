import * as React from "react"
import Layout from "../components/layout/Layout";
import SEO from "../components/helper/SEO";
import {graphql, Link} from "gatsby";
import localize from "../components/helper/localize";
import Text from "../components/helper/MyPortableText";
import SmoothScroll from "../util/SmoothScroll";
import {useEffect} from "react";


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

const IndexPage = ({data, location}) => {

    const page = data.allSanityStartseite.edges[0].node;
    const settings = data.allSanitySettings.edges[0].node;
    const metadata = data.site.siteMetadata;



    useEffect(() => {

        window.onresize = () => {
            resizeBodyHeight();
        };

        window.onload = () => {
            enableScroll();
            resizeBodyHeight();
        };

        const isTouchDevice = 'ontouchstart' in document.documentElement;

        disableScroll();
        if (!isTouchDevice) smoothScroll();

        function disableScroll() {
            document.body.style.overflow = 'hidden';
        }

        function enableScroll() {
            document.body.style.overflow = '';
        }

        function smoothScroll() {
            document.querySelector('.smooth-viewport').classList.add('SmoothScroll');

            if (typeof SmoothScroll !== 'undefined') {
                new SmoothScroll({
                    target: document.querySelector('.smooth-container'),
                    scrollEase: 0.08,
                    maxOffset: 500,
                });
            }
        }

        function resizeBodyHeight() {
            document.body.style.height = document.querySelector('.smooth-viewport').scrollHeight + 'px';
        }
    });

    return (<Layout location={location} settings={settings} metadata={metadata}>
            <div className={"page"}>
                <div className="inner">
                    <SEO title={page.seo?.seo_title} description={page.seo?.seo_description} image={page.seo?.seo_image} location={location}></SEO>
                    <h1 className={"text-3xl font-bold underline"}>{page.headline}</h1>
                    <br/>
                    <Link to={"/404"} className={"hover:-translate-y-px block"}>404</Link>
                    <br/>
                    <Link to={"/imprint"}>Impressum</Link>
                    <br/>
                    <Link to={"/privacy"}>Datenschutz</Link>
                    <Text value={page._rawText}></Text>
                    <Link to={"/404"} className={"hover:-translate-y-px block"}>404</Link>

                </div>
            </div>
        </Layout>)
}

export default localize(IndexPage)
