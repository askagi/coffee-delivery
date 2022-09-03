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
import expressoTradicional from '../../../../assets/expresso-tradicional.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
export function Coffee() {
  return (
    <Card>
      <Header>
        <img src={expressoTradicional} alt="" />
        <CategoryContainer>
          <span>especial</span>
          <span>alcoólico</span>
          <span>gelado</span>
        </CategoryContainer>
      </Header>
      <Body>
        <Title>Cubano</Title>
        <Description>
          Drink gelado de café expresso com rum, creme de leite e hortelã
        </Description>
      </Body>

      <Footer>
        <PriceContainer>
          <Prefix>R$</Prefix>
          <Price>9,90</Price>
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
