import React, { useState, createContext} from "react";

export const LightOrDarkContext = createContext();


const LightOrDarkContextProvider = ( props ) => {
    const [darkVariant, setDarkVariant] = useState(true)

    const toggleLD = () => {
        setDarkVariant(preDarkVariant => !preDarkVariant)
    }

    const value = {
        darkVariant: darkVariant,
        toggleLD: toggleLD
    }

    return (
        <LightOrDarkContext.Provider value={value} {...props} />
    )
};

export default LightOrDarkContextProvider
