import React, {useContext} from "react";
import { Box, TitleAndText } from '../styles'
import styled, { css } from 'styled-components'
import { LightOrDarkContext }  from "../context/LightOrDarkContext";
import DishList from "../components/DishList";


const Home = () => {

    const lOrD = useContext(LightOrDarkContext)

  return (
      <Box
          width={'100%'}
          m={'0 auto'}
          bg={lOrD.darkVariant ? 'bgPrimaryDark' : 'bgPrimaryLight'}
          overflow={'hidden'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={40}
      >
          <TitleAndText variant={'title1'} mb={20} color={lOrD.darkVariant ? 'textDark' : 'textLight' }> lista ulubionych potraw</TitleAndText>
          <TitleAndText variant={'title2'} mb={20} color={lOrD.darkVariant ? 'textDark' : 'textLight' }>na liście jest  <TitleAndText as="span" variant={'title1'}>22</TitleAndText> pozycji</TitleAndText>
          <DishList/>
          <Box
              width={'100%'}
              m={'0 auto'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              mt={40}
          >
              <ButtonLOrD lOrDDarkVariant={lOrD.darkVariant} onClick={lOrD.toggleLD}>light or dark version</ ButtonLOrD>
          </Box>
      </Box>
  )
}

export default Home

const ButtonLOrD = styled.button`
 padding: 10px;
  border: 2px solid white;
  cursor: pointer;
  transition: 0.6s;
  ${({ theme, lOrDDarkVariant }) => `
        background: ${lOrDDarkVariant ? theme.colors.bgPrimaryLight : theme.colors.bgPrimaryDark};
        color: ${lOrDDarkVariant ? theme.colors.bgPrimaryDark : theme.colors.bgPrimaryLight};
      `};

`
