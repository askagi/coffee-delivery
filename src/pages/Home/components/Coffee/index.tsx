import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeesContext, CoffeeType } from '../../../../Contexts/CoffeesContext'
import {
  Actions,
  AddCartButton,
  Body,
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

interface Props {
  coffee: CoffeeType
}
export function Coffee({ coffee }: Props) {
  const { updateCart } = useContext(CoffeesContext)
  const [quantity, setQuantity] = useState(1)

  function addQuantity() {
    setQuantity((state) => state + 1)
  }

  function decreaseQuantity() {
    setQuantity((state) => (state > 1 ? state - 1 : state))
  }

  function handleCart() {
    updateCart(coffee.id, quantity)
  }

  return (
    <Card>
      <Header>
        <img src={coffee.image} alt={coffee.name} />
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
            {(coffee.price * quantity).toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </Price>
        </PriceContainer>

        <Actions>
          <Quantity>
            <Minus
              className="minus"
              size={16}
              weight="bold"
              onClick={decreaseQuantity}
            />
            <span>{quantity}</span>
            <Plus
              className="plus"
              size={16}
              weight="bold"
              onClick={addQuantity}
            />
          </Quantity>
          <AddCartButton onClick={handleCart}>
            <ShoppingCart size={22} weight="fill" />
          </AddCartButton>
        </Actions>
      </Footer>
    </Card>
  )
}
