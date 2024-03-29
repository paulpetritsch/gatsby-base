import React from "react";
import {Link} from "gatsby";

const SocialLink = ({link, color = "white"}) => {
    let icon;
    switch(link?.type){
        case 'facebook':
            icon = <svg className={"w-auto h-full"} style={{fill: color}} xmlns="http://www.w3.org/2000/svg" width="22.679" height="22.675" viewBox="0 0 22.679 22.675">
                <path id="Path_147" data-name="Path 147" d="M0,12.047V10.63c.034-.277.063-.555.1-.831A11.07,11.07,0,0,1,2.818,3.876,11.118,11.118,0,0,1,11.064.007a10.618,10.618,0,0,1,6,1.556,11.118,11.118,0,0,1,5.606,9.475A10.59,10.59,0,0,1,21.1,17.1a11.193,11.193,0,0,1-7.8,5.407c-.411.077-.829.117-1.244.174H10.63c-.277-.034-.554-.064-.83-.1A11.385,11.385,0,0,1,.176,13.314C.1,12.894.057,12.469,0,12.047M14.352,5.171c-.8,0-1.585-.041-2.362.009A2.353,2.353,0,0,0,9.645,7.3a9.772,9.772,0,0,0-.067,1.345c-.008.248,0,.5,0,.772H8.3v2.334H9.59v6.541h2.729V11.727H14.16L14.4,9.41h-2.08c0-.5-.011-.973,0-1.444a.527.527,0,0,1,.572-.547c.3-.01.605,0,.908,0h.552Z" transform="translate(0.001 -0.001)"/>
            </svg>;
        break;
        case 'instagram':
            icon = <svg className={"w-auto h-full"} style={{fill: color}} xmlns="http://www.w3.org/2000/svg" width="22.626" height="22.634" viewBox="0 0 22.626 22.634">
                <path id="Path_144" data-name="Path 144" d="M596,.466h1.415c.145.018.29.038.435.054a10.946,10.946,0,0,1,6.29,2.743,11,11,0,0,1,3.773,10.029,10.838,10.838,0,0,1-4.321,7.462A11.011,11.011,0,0,1,595.2,23a10.859,10.859,0,0,1-5.637-2.444,11.148,11.148,0,0,1-4-6.8c-.076-.419-.118-.843-.176-1.265V11.076c.018-.145.038-.29.053-.435a11.141,11.141,0,0,1,2.768-6.324,11.089,11.089,0,0,1,6.569-3.68c.4-.071.813-.115,1.22-.171M590.177,11.79c.041,1.075.042,2.16.132,3.237a3.335,3.335,0,0,0,2.916,3.113,17.7,17.7,0,0,0,2.489.131c1.406,0,2.816.006,4.217-.093a3.265,3.265,0,0,0,2.86-1.964,4.007,4.007,0,0,0,.37-1.67q.035-2.287.037-4.574a14.044,14.044,0,0,0-.082-1.433,3.363,3.363,0,0,0-2.922-3.112,17.235,17.235,0,0,0-2.467-.131c-1.414,0-2.831-.007-4.239.09a3.363,3.363,0,0,0-3.181,3.173c-.089,1.07-.09,2.148-.13,3.231" transform="translate(-585.393 -0.466)"/>
                <path id="Path_145" data-name="Path 145" d="M726.76,135.24c.976.028,1.964.032,2.948.09a2.257,2.257,0,0,1,2.3,2.3q.078,2.946,0,5.9a2.233,2.233,0,0,1-2.319,2.317q-2.935.08-5.873,0a2.228,2.228,0,0,1-2.309-2.3q-.079-2.946,0-5.9a2.261,2.261,0,0,1,2.307-2.311c.977-.058,1.957-.061,2.947-.089m3.331,5.346a3.335,3.335,0,1,0-3.344,3.336,3.329,3.329,0,0,0,3.344-3.336m.911-3.446a.776.776,0,1,0-.809.755.774.774,0,0,0,.809-.755" transform="translate(-715.44 -129.27)"/>
                <path id="Path_146" data-name="Path 146" d="M794.174,211.405a2.166,2.166,0,1,1,2.16-2.165,2.17,2.17,0,0,1-2.16,2.165" transform="translate(-782.852 -197.922)"/>
            </svg>
            break;
    }
    return <a href={link?.value} target={"_blank"}>
        {icon}
    </a>
}


export default SocialLink
