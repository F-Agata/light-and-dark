import styled from 'styled-components'
import { variant, color, space, typography } from 'styled-system'

export const TitleAndText = styled.p`
  font-family: 'Oswald', sans-serif;
  text-decoration: none;
  ${color};
  ${space};
  ${typography};
  ${variant({
    variants: {
      title1: {
        fontSize: '36px',
        lineHeight: '150%',
      },
      title2: {
        fontSize: '24px',
        lineHeight: '120%',
      },
      textLarge: {
        fontSize: '16px',
        lineHeight: '110%',
      },
      textSmall: {
        fontSize: '12px',
        lineHeight: '110%',
      },
    },
  })};
`
