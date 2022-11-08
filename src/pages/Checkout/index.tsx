import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeesContext } from '../../Contexts/CoffeesContext'
import { AddressForm } from './Components/CardAddress'
import { PaymentMethod } from './Components/CardOfPaymentMethod'
import { ConfirmProduct } from './Components/ConfirmProduct'
import {
  CheckoutContainer,
  Container,
  FormsContainer,
  Header,
  Title,
} from './styles'

export function Checkout() {
  const navegate = useNavigate()
  const { FormSubmitDeliveryOrderData } = useContext(CoffeesContext)
  async function handleSubmit(event: any) {
    event.preventDefault()
    FormSubmitDeliveryOrderData()

    navegate('/success')
  }

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <Container>
      <Header>
        <Title>Complete seu pedido</Title>
        <Title>Cafés selecionados</Title>
      </Header>
      <form onSubmit={handleSubmit}>
        <CheckoutContainer>
          <FormsContainer>
            <AddressForm />
            <PaymentMethod />
          </FormsContainer>
          <ConfirmProduct />
        </CheckoutContainer>
      </form>
    </Container>
  )
}
