import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeesContextProvider } from './Contexts/CoffeesContext'
import { Router } from './router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
          <GlobalStyles />
        </CoffeesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
