import styled from 'styled-components'

export const Coffee = styled.div``

export const BodyCoffeeItem = styled.div`
  display: flex;
  padding: 0.8rem 0.4rem;
  /* outline: 1px solid black; */
  img {
    width: 6.4rem;
    height: 6.4rem;
    margin-right: 2rem;
  }
`

export const CoffeeName = styled.div`
  font: 400 1.6rem Roboto, sans-serif;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 0.8rem;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const Quantity = styled.div`
  padding: 0.55rem 0.8rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
  }

  .minus,
  .plus {
    color: ${(props) => props.theme.purple};
    transition: color 0.2s;
  }

  .minus:hover,
  .plus:hover {
    color: initial;
    cursor: pointer;
    transition: color 0.2s;
  }
`

export const ButtonRemove = styled.div`
  padding: 0.8rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  font: 400 1.2rem Roboto, sans-serif;
  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    cursor: pointer;
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
    transition: all 0.2s;
  }
  transition: all 0.2s;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

export const Price = styled.div`
  font: 700 1.6rem Roboto, sans-serif;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
`

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${(props) => props.theme['base-button']};
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`
