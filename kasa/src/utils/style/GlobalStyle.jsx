import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', Helvetica, sans-serif;
    }
    body {
        margin: auto;
        width: 90%;
    }
`

export default function GlobalStyle() {
  return <StyledGlobalStyle />
}