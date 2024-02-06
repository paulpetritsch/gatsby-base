import {Script} from "gatsby";
import React from "react";
import {useUserConsent} from "../../util/UserConsentContext";

const GoogleTag = () => {

    const {consent} = useUserConsent();

    return <>{consent.marketing && (<>

        </>
    )}</>
}

export default GoogleTag
