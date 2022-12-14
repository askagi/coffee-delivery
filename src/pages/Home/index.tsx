import { useContext, useEffect } from 'react'
import { CoffeesContext } from '../../Contexts/CoffeesContext'
import { Coffee } from './components/Coffee'
import { Header } from './components/Header'
import { HomeContainer, ProductsContainer, Title } from './styles'

export function Home() {
  const { coffees } = useContext(CoffeesContext)

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <HomeContainer>
      <Header />
      <main>
        <Title>Nossos cafés</Title>
        <ProductsContainer>
          {coffees.map((coffee) => (
            <Coffee key={coffee.id} coffee={coffee} />
          ))}
        </ProductsContainer>
      </main>
    </HomeContainer>
  )
}
