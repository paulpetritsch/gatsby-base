import React from 'react';
import {GatsbyImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const ImageAlt = ({image, additionalClass}) => {
    if(image.link){
        return (
            <Link to={image.link} className={`imageAlt`}>
                <GatsbyImage className={`page-image ${additionalClass ? additionalClass : ""}`} image={image?.asset?.gatsbyImageData} alt={image?.alt}></GatsbyImage>
            </Link>
        );
    }
    else {
        return (
            <div className={`imageAlt`} title={image.credits}>
                <GatsbyImage className={`page-image ${additionalClass ? additionalClass : ""}`} image={image?.asset?.gatsbyImageData} alt={image?.alt}></GatsbyImage>
            </div>
        );
    }
}

export default ImageAlt;
