import styled from 'styled-components'

export const PositionStatic = styled.div`
  padding: 3.2rem 0;
`
export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 0;
  .noneBoxShadow {
    outline: 0;
    box-shadow: none;
  }
  position: fixed;
  top: 0;
  z-index: 10;
  left: 10rem;
  right: 10rem;
  background-color: ${({ theme }) => theme.background};
`

export const ItemsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    position: relative;
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

export const ItemIndicator = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -0.8rem;
  right: -0.8rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    color: ${(props) => props.theme.white};
  }
`
