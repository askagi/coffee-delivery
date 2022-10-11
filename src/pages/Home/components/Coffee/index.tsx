import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Actions,
  Body,
  BuyButton,
  Card,
  CategoryContainer,
  Description,
  Footer,
  Header,
  Prefix,
  Price,
  PriceContainer,
  Quantity,
  Title,
} from './styles'

interface CoffeeProps {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

interface Props {
  coffee: CoffeeProps
  setCoffees?: () => void
}
export function Coffee({ coffee }: Props) {
  return (
    <Card>
      <Header>
        <img src={coffee.image} alt="" />
        <CategoryContainer>
          {coffee.tags.map((tag: string) => (
            <span key={tag}>{tag}</span>
          ))}
        </CategoryContainer>
      </Header>
      <Body>
        <Title>{coffee.name}</Title>
        <Description>{coffee.description}</Description>
      </Body>

      <Footer>
        <PriceContainer>
          <Prefix>R$</Prefix>
          <Price>
            {coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </Price>
        </PriceContainer>

        <Actions>
          <Quantity>
            <Minus className="minus" size={16} weight="bold" />
            <span>1</span>
            <Plus className="plus" size={16} weight="bold" />
          </Quantity>
          <BuyButton>
            <ShoppingCart size={22} weight="fill" />
          </BuyButton>
        </Actions>
      </Footer>
    </Card>
  )
}
