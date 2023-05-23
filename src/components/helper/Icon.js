import React from "react";
import { BsPlay, BsInstagram, BsFacebook, BsCamera } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineCamera, AiOutlineYoutube } from 'react-icons/ai'
import { ImFilm } from 'react-icons/im'
import {FiLinkedin} from 'react-icons/fi'

const Icon = ({icon, color}) => {

    let iconColor = "#ffffff";
    switch(color){
        case "light": iconColor = 'E8E8E8';break;
        case "dark": iconColor = '1A1A1A';break;
        case "color": iconColor = 'EF3908';break;
    }
    switch(icon){
        case 'play':
            return <BsPlay className={"play"} color={iconColor}/>;
        case 'camera':
            return <AiOutlineCamera color={iconColor}/>;
        case 'facebook':
            return <BsFacebook color={iconColor}/>;
        case 'instagram':
            return <AiOutlineInstagram color={iconColor}/>;
        case 'film':
            return <ImFilm color={iconColor}/>;
        case 'youtube':
            return <AiOutlineYoutube color={iconColor}/>;
        case 'linkedin':
            return <FiLinkedin color={iconColor}/>;
    }
    return (
        <></>
    )
}

export default Icon;
