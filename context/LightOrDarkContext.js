import React, { useState, createContext} from "react";

export const LightOrDarkContext = createContext();


const LightOrDarkContextProvider = ( props ) => {

    const [darkVariant, setDarkVariant] = useState(false)
    const lightVersion = {bgc:  props.theme.colors.bgLight, tc: props.theme.colors.textLight}
    const darkVersion = {bgc:  props.theme.colors.bgDark, tc: props.theme.colors.textDark}

    const toggleLD = () => {
        setDarkVariant(preDarkVariant => !preDarkVariant)
    }

    const value = {
        darkVariant,
        toggleLD,
        lightVersion,
        darkVersion,
    }

    return (
        <LightOrDarkContext.Provider value={value} {...props} />
    )
};

export default LightOrDarkContextProvider
