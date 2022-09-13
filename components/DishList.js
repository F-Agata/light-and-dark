import React, { useContext} from "react";
import { Box, TitleAndText } from '../styles'
import styled, { css } from 'styled-components'
import { LightOrDarkContext }  from "../context/LightOrDarkContext";

const DishList = () => {

    const lOrD = useContext(LightOrDarkContext)

    return (
        <Box>
            <StyledNavigationUl>
                <StyledNavigationLi>
                    1 xfgvfvgfvfbcfb
                </StyledNavigationLi>
                <StyledNavigationLi>
                   2 xfgvfvgfvfbcfb
                </StyledNavigationLi>
                <StyledNavigationLi>
                   3 xfgvfvgfvfbcfb
                </StyledNavigationLi>
                <StyledNavigationLi>
                    4 xfgvfvgfvfbcfb
                </StyledNavigationLi>
                <StyledNavigationLi>
                   5 xfgvfvgfvfbcfb
                </StyledNavigationLi>
            </StyledNavigationUl>
        </Box>
    )
}

export default DishList

const StyledNavigationUl = styled.ul`
  border: aquamarine 2px solid;
  //display: flex;
  //justify-content: flex-end;
  //@media (min-width: 1024px) {
  //  justify-content: space-between;
  //}
`

const StyledNavigationLi = styled.li`
  list-style: none;
  padding: 10px ;
  cursor: pointer;
  transition: 0.3s;
  // :hover {
  //   ${({ theme }) => css`
  //     font-weight: ${theme.fontWeights.fontBold};
  //     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //   `};
  // }
  // :active {
  //   ${({ theme }) => css`
  //     font-weight: ${theme.fontWeights.fontBold};
  //     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //   `};
  //   :focus {
  //     ${({ theme }) => css`
  //       font-weight: ${theme.fontWeights.fontBold};
  //       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //     `};
  //   }
  // }
`
