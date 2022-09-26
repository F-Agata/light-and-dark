import React, { useState, createContext, useEffect } from 'react'
import { nanoid } from 'nanoid'

export const MealsContext = createContext()

const MealsContextProvider = (props) => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const storageMeals = localStorage.getItem('meals')
    setMeals(JSON.parse(storageMeals))
  }, [])

  const addDishToArray = (nameFromValue) => {
    setMeals([...meals, { nameDish: nameFromValue, idDish: nanoid() }])
    localStorage.setItem(
      'meals',
      JSON.stringify([...meals, { nameDish: nameFromValue, idDish: nanoid() }]),
    )
  }

  const removeDishFromArray = (id) => {
    setMeals(meals.filter((item) => item.idDish !== id))
    localStorage.setItem(
      'meals',
      JSON.stringify(meals.filter((item) => item.idDish !== id)),
    )
  }

  return (
    <MealsContext.Provider
      value={{ meals, addDishToArray, removeDishFromArray }}
      {...props}
    />
  )
}

export default MealsContextProvider
