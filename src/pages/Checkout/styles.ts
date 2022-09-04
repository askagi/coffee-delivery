import styled from 'styled-components'

export const Title = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-title']};

  margin-bottom: 1.5rem;
`

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 3.2rem;
  padding-bottom: 10rem;
`

export const FormsContainer = styled.div`
  width: 64rem;
`

export const CardBase = styled.div`
  padding: 4rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`
export const FormContainerAddress = styled(CardBase)`
  width: 100%;
  margin-bottom: 1.2rem;
`

export const HeaderForm = styled.div`
  margin-bottom: 3.2rem;

  div {
    display: flex;
    align-items: flex-start;
    column-gap: 0.8rem;

    .color-yellow-dark {
      color: ${(props) => props.theme['yellow-dark']};
    }

    .color-purple {
      color: ${(props) => props.theme.purple};
    }

    div {
      display: flex;
      flex-direction: column;
      h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 130%;

        display: flex;
        align-items: center;
        color: ${(props) => props.theme['base-subtitle']};
      }

      span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 130%;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`
export const BodyFormAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  div {
    display: flex;
    gap: 1.2rem;
  }
`

export const InputCep = styled.input`
  width: 35%;
`

export const InputStreet = styled.input`
  width: 56rem;
`

export const InputNumber = styled.input`
  flex: 1;
`

export const InputComplement = styled.input`
  flex: 1;
`

export const InputDistrict = styled.input`
  width: 20rem;
`

export const InputCity = styled.input`
  width: 27.6rem;
`

export const InputState = styled.input`
  width: 6rem;
`

export const FormCardContainer = styled(CardBase)`
  width: 100%;
`

export const ConfirmeProductsContainer = styled(CardBase)`
  width: 44.8rem;
`
