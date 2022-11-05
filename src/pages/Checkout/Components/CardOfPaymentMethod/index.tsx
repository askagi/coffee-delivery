import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../Contexts/CoffeesContext'
import {
  ButtonCard,
  FormOfPayment,
  Header,
  PaymentMethodContainer,
} from './styles'

export function PaymentMethod() {
  const { formPayment, handleFormPayment } = useContext(CoffeesContext)

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
      <FormOfPayment
        name="formOfPayment"
        onValueChange={handleFormPayment}
        defaultValue={formPayment.formOfPayment}
        value={formPayment.formOfPayment}
      >
        <ButtonCard value="credito">
          <CreditCard size={16} />
          <span>cartão de crédito</span>
        </ButtonCard>

        <ButtonCard value="debito">
          <Bank size={16} />
          <span>cartão de débito</span>
        </ButtonCard>

        <ButtonCard value="dinheiro">
          <Money size={16} />
          <span>dinheiro</span>
        </ButtonCard>
      </FormOfPayment>
    </PaymentMethodContainer>
  )
}
