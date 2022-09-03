import styled from 'styled-components'

export const Card = styled.div`
  width: 25.6rem;
  min-height: 30.1rem;
  padding: 0 2rem 2rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  img {
    margin-top: -2rem;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 1.6rem;
  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 0.4rem 0.8rem;
    border-radius: 100px;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 3.3rem;
`

export const Title = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 2rem;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 130%;
  text-align: center;

  color: ${(props) => props.theme['base-label']};
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PriceContainer = styled.span`
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
`
export const Prefix = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 130%;
  text-align: right;
  color: ${(props) => props.theme['base-text']};
`

export const Price = styled.span`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 2.4rem;
  line-height: 3.1rem;
  text-align: right;
  color: ${(props) => props.theme['base-text']};
`
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const Quantity = styled.div`
  padding: 0.85rem 0.9rem;
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

export const BuyButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

  color: ${(props) => props.theme.while};
  transition: background 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
    transition: background 0.2s;
  }
`
