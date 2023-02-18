import { PortableText } from '@portabletext/react';
import React from 'react';

const textComponents = {
    block: {
        normal: ({ children }) => <p>{children}</p>,
        h1: ({ children }) => <h1>{children}</h1>,
        h2: ({ children }) => <h2>{children}</h2>,
        h3: ({ children }) => <h3>{children}</h3>,
        h4: ({ children }) => <h4>{children}</h4>,
        h5: ({ children }) => <h5>{children}</h5>,
        h6: ({ children }) => <h6>{children}</h6>,
    },
    marks: {
        strong: ({children}) => <strong>{children}</strong>,
        link: ({value, children}) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'} className="hover-underline">
                    {children}
                </a>
            )
        },
    },
};

function Text({ value }) {
    return <PortableText value={value} components={textComponents} />;
}

export default Text;
