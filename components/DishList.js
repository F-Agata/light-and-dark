import React, {useState, useContext} from "react";
import { Box } from '../styles'
import styled, { css } from 'styled-components'
import { LightOrDarkContext }  from "../context/LightOrDarkContext";
import {MealsContext} from "../context/MealsContext";

const DishList = () => {

    const lOrD = useContext(LightOrDarkContext)
    const yourChoiceLOrD = lOrD.darkVariant ? lOrD.darkVersion : lOrD.lightVersion;

    const mealsOperations = useContext(MealsContext)
    const mealsArray = mealsOperations.meals
    console.log(mealsArray.length)
    console.log(mealsArray)

   const mealItem = mealsArray.map((item) => (
       <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD} key={item.id}>
           {item.name}
       </StyledNavigationLi >
     ))

    return (
        <Box   width={'80%'}>
            <StyledNavigationUl>
                {mealsArray.length === 0 &&
                <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD}>
                    jeszcze nie wybrałeś ulubionej potrawy
                </StyledNavigationLi>
                }
                {mealsArray.map((item) => (
                        <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD} key={item.id}>
                            {item.name}
                        </StyledNavigationLi >
                ))}
            </StyledNavigationUl>
        </Box>
    )
}

export default DishList

const StyledNavigationUl = styled.ul`
width: 100%;
  border: 2px solid white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `};
`

const StyledNavigationLi = styled.li`
  list-style: none;
  padding: 10px 20px;
  margin: 10px 0px;
  cursor: pointer;
  border-radius: 10px;
  ${({ yourChoiceLOrD }) => css`
    background: ${yourChoiceLOrD.bgc};
    color: ${yourChoiceLOrD.tc};
  `};
   :hover {
     text-decoration: line-through;
   }
`
