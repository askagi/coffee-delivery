import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logoNavbar from '../../assets/logo-navbar.svg'
import { CoffeesContext } from '../../Contexts/CoffeesContext'
import {
  ItemIndicator,
  ItemsRight,
  LocationInfo,
  NavbarContainer,
  PositionStatic,
} from './styles'
export function Navbar() {
  const { cart } = useContext(CoffeesContext)
  return (
    <>
      <PositionStatic />
      <NavbarContainer>
        <NavLink to="/" title="Home" className="noneBoxShadow">
          <img src={logoNavbar} alt="logo da coffee delivery" />
        </NavLink>

        <ItemsRight>
          <LocationInfo>
            <MapPin size={22} weight="fill" />
            Alagoinhas, BA
          </LocationInfo>

          <NavLink to="/checkout" title="Checkout">
            {cart.length ? (
              <ItemIndicator>
                <span>{cart.length}</span>
              </ItemIndicator>
            ) : (
              ''
            )}
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </ItemsRight>
      </NavbarContainer>
    </>
    // </PositionStatic>
  )
}
