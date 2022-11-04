import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeesContext } from '../../../../Contexts/CoffeesContext'
import { priceFormatter } from '../../../../utils/formatter'
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

interface Props {
  coffee: { id: number; quantity: number }
}

export function CoffeeItem({ coffee }: Props) {
  const { cart, removeCoffeeCart, coffees, updateCart } =
    useContext(CoffeesContext)
  const [quantity, setQuantity] = useState<number>(coffee.quantity)

  function addQuantity() {
    setQuantity((state) => state + 1)
    coffee.quantity = quantity
  }

  function decreaseQuantity() {
    setQuantity((state) => (state > 1 ? state - 1 : state))
    coffee.quantity = quantity
  }

  function handleCart() {
    updateCart(coffee.id, quantity)
  }

  function handleCoffeeRemove() {
    removeCoffeeCart(coffee.id)
  }

  useEffect(() => {
    handleCart()
  }, [quantity, cart])

  return (
    <Coffee>
      <BodyCoffeeItem>
        <img
          src={coffees[coffee.id - 1].image}
          alt={coffees[coffee.id - 1].name}
        />
        <div>
          <CoffeeName>{coffees[coffee.id - 1].name}</CoffeeName>
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
            <ButtonRemove onClick={handleCoffeeRemove}>
              <Trash size={16} />
              remover
            </ButtonRemove>
          </Actions>
        </div>
        <PriceContainer>
          <Price>
            {priceFormatter.format(coffees[coffee.id - 1].price * quantity)}
          </Price>
        </PriceContainer>
      </BodyCoffeeItem>
      <Line />
    </Coffee>
  )
}
