import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 html {
    font-size: 62.5%;
 }

 body {
    font-size: 1.6rem;
    background: ${props => props.theme.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 }

 button {}

 /* 
    font-family: 'Baloo 2', cursive;
    font-family: 'Roboto', sans-serif; 
*/
`