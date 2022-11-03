import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeesContext } from '../../../../Contexts/CoffeesContext'
import { priceFormatter } from '../../../../utils/formatter'
import { CoffeeItem } from '../CoffeeItem'
import {
  ButtonConfirmOrder,
  ConfirmProductContainer,
  Delivery,
  Summary,
  SummaryContainer,
  TotalItem,
  TotalOrder,
} from './styled'

export function ConfirmProduct() {
  const navegate = useNavigate()
  const { cart, payable } = useContext(CoffeesContext)

  const deliveryValue = 5

  return (
    <ConfirmProductContainer>
      {cart.map((item) => (
        <CoffeeItem key={item.id} coffee={item} />
      ))}

      <Summary>
        <SummaryContainer>
          <TotalItem>
            <span>Total de itens</span>
            <span>{priceFormatter.format(payable)}</span>
          </TotalItem>
          <Delivery>
            <span>Entrega</span>
            <span>{priceFormatter.format(deliveryValue)}</span>
          </Delivery>
          <TotalOrder>
            <span>Total</span>
            <span>
              {cart.length && priceFormatter.format(payable + deliveryValue)}
            </span>
          </TotalOrder>
        </SummaryContainer>
        <ButtonConfirmOrder type="submit" onClick={() => navegate('/success')}>
          confirmar pedido
        </ButtonConfirmOrder>
      </Summary>
    </ConfirmProductContainer>
  )
}
