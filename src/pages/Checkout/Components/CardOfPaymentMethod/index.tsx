import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Body, ButtonCard, Header, PaymentMethodContainer } from './styles'

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <Header>
        <div>
          <CurrencyDollar className="color-purple" size={22} />
          <div>
            <h4>Pagamento</h4>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
      </Header>
      <Body>
        <ButtonCard type="button">
          <CreditCard size={16} />
          <span>cartão de crédito</span>
        </ButtonCard>

        <ButtonCard type="button">
          <Bank size={16} />
          <span>cartão de crédito</span>
        </ButtonCard>

        <ButtonCard type="button">
          <Money size={16} />
          <span>cartão de crédito</span>
        </ButtonCard>
      </Body>
    </PaymentMethodContainer>
  )
}
