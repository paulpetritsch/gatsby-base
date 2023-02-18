export const createLocaleTextGetter = languageCode => {
    const languages = [languageCode, "de"] // last language in array is default;
    const localize = value => {
        if (Array.isArray(value)) {
            return value.map(v => localize(v, languages))
        } else if (typeof value == "object") {
            if(value){
                if (/^locale[A-Z]/.test(value._type)) {
                    const language = languages.find(lang => value[lang])
                    return value[language]
                }
                return Object.keys(value).reduce((result, key) => {
                    result[key] = localize(value[key], languages)
                    return result
                }, {})
            }

        }
        return value
    }

    return localize
}

export const localeLink = (to, location) => {

    const keys = ['en']

    const pathname = location.pathname

    const lang = keys.find(
        (k) => (pathname.includes(`/${k}/`) || pathname.includes(`/${k}`))
    )

    if (!lang) {
        return to
    }

    return `/${lang}${to}`
}
