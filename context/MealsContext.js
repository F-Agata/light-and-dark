import React, { useState, createContext} from "react";
import { nanoid } from 'nanoid'

export const MealsContext = createContext();


const MealsContextProvider = ( props ) => {

    const [meals, setMeals] = useState([ ])


    const addDishToArray = (nameFromValue) => {
        console.log(nameFromValue)
        setMeals([...meals, {nameDish: nameFromValue, idDish: nanoid()}])
    }

    const value = {
        meals: meals,
        addDishToArray: addDishToArray,
           }

    return (
        <MealsContext.Provider value={value} {...props} />
    )
};

export default MealsContextProvider
