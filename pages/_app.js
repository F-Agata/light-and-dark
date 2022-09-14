import LightOrDarkProvider from "/context/LightOrDarkContext"
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { Box, GlobalStyle, theme } from '../styles'
import LightOrDarkContextProvider from "/context/LightOrDarkContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <LightOrDarkContextProvider theme={theme}>
             <Box
                     maxWidth={1000}
                     minWidth={375}
                     width={'100%'}
                     m={'0 auto'}
                     overflow={'hidden'}
                     display={'flex'}
                     flexDirection={'column'}
                     justifyContent={'center'}
        >
                <Component {...pageProps} />
             </Box>
          </LightOrDarkContextProvider >
      </ThemeProvider>
    </>
  )
}

export default MyApp

