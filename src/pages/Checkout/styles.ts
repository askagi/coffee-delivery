import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  gap: 50.5rem;
`

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
