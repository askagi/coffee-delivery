import styled from 'styled-components'
import { CardBase } from '../../styles'

export const ConfirmProductContainer = styled(CardBase)`
  width: 44.8rem;
  border-radius: 6px 36px;
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const SummaryItemsBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: 400 1.4rem Roboto, sans-serif;
  color: ${(props) => props.theme['base-text']};
`

export const TotalItem = styled(SummaryItemsBase)``

export const Delivery = styled(SummaryItemsBase)``

export const TotalOrder = styled(SummaryItemsBase)`
  font: 700 2rem Roboto, sans-serif;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ButtonConfirmOrder = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0.8rem;
  width: 100%;

  background: ${(props) => props.theme.yellow};
  border-radius: 6px;

  font: 700 1.4rem Roboto, sans-serif;
  line-height: 160%;
  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  font-stretch: 100;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
    transition: background 0.2s;
  }
  transition: background 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
export const EmpityCartMessage = styled.span`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 4rem 0 8rem 0;
  font: 400 2.5rem Roboto, sans-serif;
  color: ${(props) => props.theme['base-text']};
`
