import Logo from "./Logo";
import React, { useState, useEffect } from 'react';

export default function intersperseWithLogo(text='', tagType, color = '#000000') {
    if (!text || typeof text !== 'string') {
        return [];
    }
    const parts = text.split('spleen');
    const result = [];

    let height;
    let margin;
    switch(tagType) {
        case 'h1':
                height = '56px';
                margin = '0';
            break;
        case 'p':
            height = '25px';
            margin = '3px';
            break;
        default:
            height = 'h-full';
    }

    parts.forEach((part, index) => {
        result.push(part);
        if(index !== parts.length - 1) {
            result.push(<Logo height={height} margin={margin} key={index} color={color} />);
        }
    });
    return result;
}
