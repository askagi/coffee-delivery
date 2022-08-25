import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 0;
`

export const ItemsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['yellow-light']};
    padding: 1rem;
    border-radius: 6px;
    transition: box-shadow 0.3s;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
      transition: box-shadow 0.3s;
    }
  }
`

export const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  gap: 0.4rem;
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
  transition: box-shadow 0.3s;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  svg {
    color: ${(props) => props.theme.purple};
  }
`
