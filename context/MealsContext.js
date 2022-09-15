import React, { useState, createContext} from "react";
import { nanoid } from 'nanoid'

export const MealsContext = createContext();


const MealsContextProvider = ( props ) => {

    const [meals, setMeals] = useState([ ])


    const addmeals = () => {
        setMeals([...meals], {name: 'sdfsf', id: nanoid()})
    }

    const value = {
        meals: meals,
        addmeals: addmeals,
           }

    return (
        <MealsContext.Provider value={value} {...props} />
    )
};

export default MealsContextProvider
