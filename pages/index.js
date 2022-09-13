import React, {useContext} from "react";
import { Box, TitleAndText } from '../styles'
import { LightOrDarkContext }  from "../context/LightOrDarkContext";
import DishList from "../components/DishList";


const Home = () => {

    const lOrD = useContext(LightOrDarkContext)

  return (
      <Box
          width={'100%'}
          m={'0 auto'}
          bg={'bgPrimaryLight'}
          overflow={'hidden'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={40}
      >
          <TitleAndText variant={'title1'} mb={20}> lista ulubionych potraw</TitleAndText>
          <TitleAndText variant={'title2'} mb={20}>na liście jest  <TitleAndText as="span" variant={'title1'}>22</TitleAndText> pozycji</TitleAndText>
<DishList/>
          <Box>
              <button onClick={lOrD.toggleLD}>light or dark version</button>
          </Box>

      </Box>
  )
}

export default Home
