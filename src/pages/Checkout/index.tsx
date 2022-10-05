import { AddressForm } from './Components/CardAddress'
import { PaymentMethod } from './Components/CardOfPaymentMethod'
import { ConfirmProduct } from './Components/ConfirmProduct'
import { CheckoutContainer, FormsContainer, Header, Title } from './styles'

export function Checkout() {
  return (
    <div>
      <Header>
        <Title>Complete seu pedido</Title>
        <Title>Cafés selecionados</Title>
      </Header>
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
