import { MapPinLine } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { CoffeesContext } from '../../../../Contexts/CoffeesContext'
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
  const { formAddress, handleFormAddress, fetchAddress } =
    useContext(CoffeesContext)

  useEffect(() => {
    if (formAddress.cep.length === 9) {
      fetchAddress()
    }
  }, [formAddress.cep.length])
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
        <InputCep
          placeholder="CEP"
          name="cep"
          maxLength={9}
          required
          value={formAddress.cep}
          // onBlur={desfoco}
          onChange={handleFormAddress}
        />
        <InputStreet
          placeholder="Rua"
          name="street"
          required
          value={formAddress.street}
          onChange={handleFormAddress}
        />
        <div>
          <InputNumber
            placeholder="Número"
            name="number"
            required
            value={formAddress.number}
            onChange={handleFormAddress}
          />
          <InputComplement
            placeholder="Complemento"
            name="complement"
            required
            value={formAddress.complement}
            onChange={handleFormAddress}
          />
        </div>

        <div>
          <InputDistrict
            placeholder="Bairro"
            name="district"
            required
            value={formAddress.district}
            onChange={handleFormAddress}
          />
          <InputCity
            placeholder="Cidade"
            name="city"
            required
            value={formAddress.city}
            onChange={handleFormAddress}
          />
          <InputState
            placeholder="UF"
            name="state"
            maxLength={2}
            required
            value={formAddress.state}
            onChange={handleFormAddress}
          />
        </div>
      </BodyForm>
    </FormContainer>
  )
}
