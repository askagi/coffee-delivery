import { Coffee } from './components/Coffee'
import { Header } from './components/Header'
import { HomeContainer, ProductsContainer, Title } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <main>
        <Title>Nossos cafés</Title>
        <ProductsContainer>
          <Coffee />
        </ProductsContainer>
      </main>
    </HomeContainer>
  )
}
