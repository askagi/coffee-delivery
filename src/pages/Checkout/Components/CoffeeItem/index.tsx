import { Minus, Plus, Trash } from 'phosphor-react'
import {
  Actions,
  BodyCoffeeItem,
  ButtonRemove,
  Coffee,
  CoffeeName,
  Line,
  Price,
  PriceContainer,
  Quantity,
} from './styles'

// interface CoffeeProps {
//   image: string
//   name: string
//   price: number
// }

export function CoffeeItem({ coffee }) {
  return (
    <Coffee>
      <BodyCoffeeItem>
        <img src={coffee.image} alt={coffee.name} />
        <div>
          <CoffeeName>{coffee.name}</CoffeeName>
          <Actions>
            <Quantity>
              <Minus className="minus" size={16} weight="bold" />
              <span>1</span>
              <Plus className="plus" size={16} weight="bold" />
            </Quantity>
            <ButtonRemove>
              <Trash size={16} />
              remover
            </ButtonRemove>
          </Actions>
        </div>
        <PriceContainer>
          <Price>
            {coffee.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Price>
        </PriceContainer>
      </BodyCoffeeItem>
      <Line />
    </Coffee>
  )
}
