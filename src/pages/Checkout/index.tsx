import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  BodyFormAddress,
  CheckoutContainer,
  ConfirmeProductsContainer,
  FormCardContainer,
  FormContainerAddress,
  FormsContainer,
  HeaderForm,
  InputCep,
  InputCity,
  InputComplement,
  InputDistrict,
  InputNumber,
  InputState,
  InputStreet,
  Title,
} from './styles'

export function Checkout() {
  return (
    <div>
      <Title>Complete seu pedido</Title>
      <CheckoutContainer>
        <FormsContainer>
          <FormContainerAddress>
            <HeaderForm>
              <div>
                <MapPinLine className="color-yellow-dark" size={22} />
                <div>
                  <h4>Endereço de Entrega</h4>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </div>
            </HeaderForm>

            <BodyFormAddress>
              <InputCep placeholder="CEP" />
              <InputStreet placeholder="Rua" />
              <div>
                <InputNumber placeholder="Número" />
                <InputComplement placeholder="Complemento" />
              </div>

              <div>
                <InputDistrict placeholder="Bairro" />
                <InputCity placeholder="Cidade" />
                <InputState placeholder="UF" />
              </div>
            </BodyFormAddress>
          </FormContainerAddress>

          <FormCardContainer>
            <HeaderForm>
              <div>
                <CurrencyDollar className="color-purple" size={22} />
                <div>
                  <h4>Pagamento</h4>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </div>
            </HeaderForm>
          </FormCardContainer>
        </FormsContainer>

        <ConfirmeProductsContainer> </ConfirmeProductsContainer>
      </CheckoutContainer>
    </div>
  )
}
