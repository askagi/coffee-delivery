import { MapPinLine } from 'phosphor-react'
import {
  BodyForm,
  FormContainer,
  HeaderForm,
  InputCep,
  InputCity,
  InputComplement,
  InputDistrict,
  InputNumber,
  InputState,
  InputStreet,
} from './styles'

export function AddressForm() {
  return (
    <FormContainer>
      <HeaderForm>
        <div>
          <MapPinLine className="color-yellow-dark" size={22} />
          <div>
            <h4>Endereço de Entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>
      </HeaderForm>

      <BodyForm>
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
      </BodyForm>
    </FormContainer>
  )
}
