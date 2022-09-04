import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
}

 html {
    font-size: 62.5%;
 }
 

 body {
    font-size: 1.6rem;
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 }

 button {}

 input {
  border: 1px solid ${(props) => props.theme['base-button']};
  padding: 1.2rem;
  background: ${(props) => props.theme['base-input']};

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 130%;
  border-radius: 4px;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
 }

 /* 
    font-family: 'Baloo 2', cursive;
    font-family: 'Roboto', sans-serif; 
*/
`
