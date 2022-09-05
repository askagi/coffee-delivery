import styled from 'styled-components'
import { CardBase } from '../../styles'

export const PaymentMethodContainer = styled(CardBase)`
  width: 100%;
`
export const Header = styled.div`
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
export const Body = styled.div`
  display: flex;
  gap: 1.2rem;
`
export const ButtonCard = styled.button`
  display: flex;
  /* align-items: center; */
  border: none;
  gap: 1.2rem;
  padding: 1.6rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: ${(props) => props.theme['base-subtitle']};
    background: ${(props) => props.theme['base-hover']};
    cursor: pointer;
    transition: color 0.2s, background 0.2s;
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.purple};
  }
`
