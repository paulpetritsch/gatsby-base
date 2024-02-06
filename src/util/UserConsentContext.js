import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const UserConsentContext = createContext();

export const useUserConsent = () => useContext(UserConsentContext);

export const UserConsentProvider = ({ children }) => {
    const [consent, setConsent] = useState({
        technical: true, // always enabled
        marketing: false
    });

    useEffect(() => {
        const savedConsent = Cookies.get('eniosol-cookie-consent');

        if (savedConsent) {
            const parsedConsent = JSON.parse(savedConsent);
            setConsent(parsedConsent);
        }
    }, []);


    return (
        <UserConsentContext.Provider value={{ consent, setConsent }}>
            {children}
        </UserConsentContext.Provider>
    );
};
