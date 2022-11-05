import { useContext } from 'react'
import { CoffeesContext } from '../../../../Contexts/CoffeesContext'
import { priceFormatter } from '../../../../utils/formatter'
import { CoffeeItem } from '../CoffeeItem'
import {
  ButtonConfirmOrder,
  ConfirmProductContainer,
  Delivery,
  EmpityCartMessage,
  Summary,
  SummaryContainer,
  TotalItem,
  TotalOrder,
} from './styled'

export function ConfirmProduct() {
  const { cart, payable } = useContext(CoffeesContext)

  const deliveryValue = 5

  return (
    <ConfirmProductContainer>
      {cart.length ? (
        cart.map((item) => <CoffeeItem key={item.id} coffee={item} />)
      ) : (
        <EmpityCartMessage>Seu carrinho está vazio</EmpityCartMessage>
      )}

      <Summary>
        <SummaryContainer>
          <TotalItem>
            <span>Total de itens</span>
            <span>{cart.length ? priceFormatter.format(payable) : '0,00'}</span>
          </TotalItem>
          <Delivery>
            <span>Entrega</span>
            <span>
              {cart.length ? priceFormatter.format(deliveryValue) : '0,00'}
            </span>
          </Delivery>
          <TotalOrder>
            <span>Total</span>
            <span>
              {cart.length
                ? priceFormatter.format(payable + deliveryValue)
                : '0,00'}
            </span>
          </TotalOrder>
        </SummaryContainer>
        <ButtonConfirmOrder type="submit" disabled={!cart.length}>
          confirmar pedido
        </ButtonConfirmOrder>
      </Summary>
    </ConfirmProductContainer>
  )
}
