import React, {useState, useEffect, useRef} from 'react';
import Cookies from 'js-cookie';
import {useUserConsent} from "../../util/UserConsentContext";
import {Link} from "gatsby";

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    const { consent, setConsent } = useUserConsent();
    const [ localConsent, setLocalConsent ] = useState(consent);

    const marketingConsent = useRef();

    useEffect(() => {
        const savedConsent = Cookies.get('eniosol-cookie-consent');
        if (savedConsent) {
            const consentObject = JSON.parse(savedConsent);
            setLocalConsent(consentObject);
        } else {
            setShowBanner(true);
        }
    }, []);

    const handleConsent = () => {
        Cookies.set('eniosol-cookie-consent', JSON.stringify(localConsent), { expires: 365 });
        setShowBanner(false);
        setConsent(localConsent);
        if (!localConsent.marketing) {
            window.location.reload();
        }
    };
    const handleConsentAll = () => {
        console.log(localConsent);
        Cookies.set('eniosol-cookie-consent', JSON.stringify({technical: true, marketing: true}), { expires: 365 });
        setShowBanner(false);
        setConsent({...consent, marketing: true});
        setLocalConsent({...localConsent, marketing: true});
        console.log(localConsent);
    };


    if (!showBanner) return null;
    return (
        <div className="cookiebanner fixed z-[100] inset-0 backdrop-blur-lg">
            <div className="cookiebanner__inner fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] p-5 bg-lighterGrey rounded-xl border border-darkBlue">
                <h6 className="cookiebanner__headline uppercase">Cookie Einstellungen</h6>
                <p className="cookiebanner__text">
                    Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Durch die Nutzung unserer Website stimmen Sie allen Cookies gemäß unserer Datenschutzrichtlinie zu.
                </p>
                <div className="acceptancecontainer cookiebanner__acceptance technisch">
                <label className="cbcontainer">
                    <input type="checkbox" id={"technical"} checked={consent.technical} disabled={true}/>
                    <span className="checkmark hover-moveup" id="dsgvocircle"></span>
                </label>
                <p className="smalltext">
                    Technisch
                </p>
            </div>
                    <div className="acceptancecontainer cookiebanner__acceptance">
                        <label className="cbcontainer">
                            <input type="checkbox" id={"marketing"} ref={marketingConsent} checked={localConsent.marketing} onChange={() => setLocalConsent({...localConsent, marketing: !localConsent.marketing})}/>
                            <span className="checkmark hover-moveup" id="dsgvocircle"></span>
                        </label>
                        <p className="smalltext">
                            Marketing
                        </p>
                    </div>
                <div className="cookiebanner__btns">
                    <div onClick={handleConsent} className="btn white outline landingbtn smalltext bold uppercase">
                        Auswahl Speichern
                    </div>
                    <div onClick={handleConsentAll} className="btn filled white landingbtn smalltext bold uppercase">
                        Alle Akzeptieren
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
