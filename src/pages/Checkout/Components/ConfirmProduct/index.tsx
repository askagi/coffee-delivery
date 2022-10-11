import { useNavigate } from 'react-router-dom'
import { coffeesData } from '../../../../database/coffees'
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
  return (
    <ConfirmProductContainer>
      <CoffeeItem key={coffeesData[0].id} coffee={coffeesData[0]} />
      <CoffeeItem key={coffeesData[5].id} coffee={coffeesData[5]} />

      <Summary>
        <SummaryContainer>
          <TotalItem>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </TotalItem>
          <Delivery>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </Delivery>
          <TotalOrder>
            <span>Total</span>
            <span>R$ 33,20</span>
          </TotalOrder>
        </SummaryContainer>
        <ButtonConfirmOrder onClick={() => navegate('/success')}>
          confirmar pedido
        </ButtonConfirmOrder>
      </Summary>
    </ConfirmProductContainer>
  )
}
