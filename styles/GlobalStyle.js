import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:                         border-box;
    -moz-box-sizing:                    border-box;
  }
  body {
    font-family:                        'Open Sans', sans-serif;
    margin:                             0;
  }
  body, button {
    font-size:                          1.3rem;
  }
  .container {
    padding:                            1rem 2rem;
  }
`

export default GlobalStyle