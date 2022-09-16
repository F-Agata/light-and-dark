import React, { useContext} from "react";
import { Box } from '../styles'
import styled, { css } from 'styled-components'
import { LightOrDarkContext }  from "../context/LightOrDarkContext";
import {MealsContext} from "../context/MealsContext";
import NewDishForm from "./NewDishForm";

const DishList = () => {

    const lOrD = useContext(LightOrDarkContext)
    const yourChoiceLOrD = lOrD.darkVariant ? lOrD.darkVersion : lOrD.lightVersion;

    // const mealsOperations = useContext(MealsContext)
    // const mealsArray = mealsOperations.meals
    // console.log( mealsOperations.meals)

    const {meals, removeDishFromArray} = useContext(MealsContext)

    return (
        <Box   width={'80%'}
               // border={'2px solid blue'}
               display={'flex'}
               flexDirection={'column'}
               justifyContent={'center'}
               alignItems={'center'}
        >
            <StyledNavigationUl>
                {/*{mealsArray.length !== 0 ?*/}
                {/*    {mealsArray.map(item => (*/}
                {/*            <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD} key={item.idDish}>*/}
                {/*                {item.nameDish}*/}
                {/*            </StyledNavigationLi>*/}
                {/*        ))}*/}
                {/*    :*/}
                {/*<StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD}>*/}
                {/*    jeszcze nie wybrałeś ulubionej potrawy*/}
                {/*</StyledNavigationLi>*/}
                {/*}*/}


                {meals.length === 0 &&
                <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD} withoutCrossingOut >
                    jeszcze nie wybrałeś ulubionej potrawy
                </StyledNavigationLi>
                }
                {meals.map((item) => (
                        <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD} key={item.idDish} onClick={() => removeDishFromArray(item.idDish)}>
                            {item.nameDish}
                        </StyledNavigationLi >
                ))}
            </StyledNavigationUl>
            <NewDishForm/>
        </Box>
    )
}

export default DishList

const StyledNavigationUl = styled.ul`
width: 100%;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
     text-decoration: ${(props) => props.withoutCrossingOut ? 'none' : 'line-through'};
  
   }
`
