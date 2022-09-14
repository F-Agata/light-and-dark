import React, {useContext} from "react";
import { Box } from '../styles'
import styled, { css } from 'styled-components'
import { LightOrDarkContext }  from "../context/LightOrDarkContext";

const DishList = () => {

    const lOrD = useContext(LightOrDarkContext)
    const yourChoiceLOrD = lOrD.darkVariant ? lOrD.darkVersion : lOrD.lightVersion;
    console.log(yourChoiceLOrD.tc)

    return (
        <Box   width={'80%'}>
            <StyledNavigationUl>
                <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD}>
                    1 zupa pomidorowa z makaronem
                </StyledNavigationLi >
                <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD}>
                   2 pizza z pieczarkami
                </StyledNavigationLi>
                <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD}>
                   3 owsianka na słodko
                </StyledNavigationLi>
                <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD}>
                    4 rolada, schabowy, czerwona kapusta
                </StyledNavigationLi>
                <StyledNavigationLi yourChoiceLOrD={yourChoiceLOrD}>
                   5 zupa dyniowa z mlekiem kokosowym
                </StyledNavigationLi>
            </StyledNavigationUl>
        </Box>
    )
}

export default DishList

const StyledNavigationUl = styled.ul`
width: 100%;
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
