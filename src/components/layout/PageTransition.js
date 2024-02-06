import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children, location }) => {

    return (<AnimatePresence initial={false} mode="wait">
        <motion.div key={location.pathname} initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{
                        ease: "easeInOut",
                        duration: .5
                    }}
                    onAnimationComplete={() => window.scrollTo(0, 0)}>
            {children}
        </motion.div>
    </AnimatePresence>);
};

export default PageTransition;
