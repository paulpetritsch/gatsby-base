import React, {useEffect, useRef, useState} from "react";

const Observer = ({}) => {
    const [animatedElements, setAnimatedElements] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("Entry is visible");
                    entry.target.classList.add('popin-reveal');
                }
            });
        }, {
            root: null, rootMargin: "0px", threshold: 0.5,
        });

        const elements = document.querySelectorAll(".is-animated");
        setAnimatedElements(Array.from(elements));

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (<></>);
}

export default Observer
