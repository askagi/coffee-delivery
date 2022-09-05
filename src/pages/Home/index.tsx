import { useState } from 'react'
import { Coffee } from './components/Coffee'
import { Header } from './components/Header'
import { HomeContainer, ProductsContainer, Title } from './styles'
import { coffeesData } from '../../database/coffees'

export function Home() {
  const [coffees, setCoffees] = useState(coffeesData)
  return (
    <HomeContainer>
      <Header />
      <main>
        <Title>Nossos cafés</Title>
        <ProductsContainer>
          {coffees.map((coffee) => (
            <Coffee key={coffee.id} />
          ))}
        </ProductsContainer>
      </main>
    </HomeContainer>
  )
}
