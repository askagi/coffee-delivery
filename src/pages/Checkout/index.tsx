import { AddressForm } from './Components/CardAddress'
import { PaymentMethod } from './Components/CardOfPaymentMethod'
import { ConfirmProduct } from './Components/ConfirmProduct'
import { CheckoutContainer, FormsContainer, Title } from './styles'

export function Checkout() {
  return (
    <div>
      <Title>Complete seu pedido</Title>
      <CheckoutContainer>
        <FormsContainer>
          <AddressForm />
          <PaymentMethod />
        </FormsContainer>
        <ConfirmProduct />
      </CheckoutContainer>
    </div>
  )
}
