import React, {useContext} from "react";
import { Box, TitleAndText } from '../styles'
import styled, { css } from 'styled-components'
import { LightOrDarkContext }  from "../context/LightOrDarkContext";
import DishList from "../components/DishList";


const Home = () => {

    const lOrD = useContext(LightOrDarkContext)
    const yourChoiceLOrD = lOrD.darkVariant ? lOrD.darkVersion : lOrD.lightVersion

  return (
      <Box
          width={'100%'}
          m={'0 auto'}
          bg={yourChoiceLOrD.bgc}
          overflow={'hidden'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={40}
      >
          <TitleAndText variant={'title1'} mb={20}
                        color={yourChoiceLOrD.tc}
          >
              lista ulubionych potraw
          </TitleAndText>
          <TitleAndText variant={'title2'} mb={20}
                        color={yourChoiceLOrD.tc}
          >
              na liście jest
              <TitleAndText as="span" variant={'title1'}>22</TitleAndText>
              pozycji
          </TitleAndText>
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
              <ButtonLOrD  yourChoiceLOrD={yourChoiceLOrD} onClick={lOrD.toggleLD}>light  or  dark  version</ ButtonLOrD>
          </Box>
      </Box>
  )
}

export default Home

const ButtonLOrD = styled.button`
 padding: 20px;
  border: 2px solid white;
  letter-spacing: 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.6s;
  ${({ yourChoiceLOrD }) => css`
        background: ${yourChoiceLOrD.bgc};
        color: ${yourChoiceLOrD.tc};
             `};
`
