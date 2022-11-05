import styled from 'styled-components'
import { CardBase } from '../../styles'

export const FormContainer = styled(CardBase)`
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
export const BodyForm = styled.div`
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
  text-transform: uppercase;
`
