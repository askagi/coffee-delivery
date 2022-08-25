import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoNavbar from '../../assets/logo-navbar.svg'
import { LocationInfo, ItemsRight, NavbarContainer } from './styles'
export function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="/" title="Home">
        <img src={logoNavbar} alt="logo da coffee delivery" />
      </NavLink>

      <ItemsRight>
        <LocationInfo>
          <MapPin size={22} weight="fill" />
          Alagoinhas, BA
        </LocationInfo>

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </ItemsRight>
    </NavbarContainer>
  )
}
