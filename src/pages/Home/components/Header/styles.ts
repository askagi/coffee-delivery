import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 9.4rem 0;
  display: flex;
  gap: 5.6rem;
  background: radial-gradient(
    circle,
    rgba(246, 212, 132, 0.06) 0%,
    rgba(236, 150, 10, 0.05) 0%,
    rgba(250, 250, 250, 1) 100%
  );
`

export const LeftContent = styled.div``

export const RightContent = styled.div``

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 4.8rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`

export const Subtitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 130%;
  font-stretch: 100;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1.6rem;
`
export const ListGroup = styled.div`
  margin-top: 6.6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ItemList = styled.li`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-grow: 1;
`

export const IconListContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    color: ${(props) => props.theme.while};
  }
`

export const YellowDarkCircle = styled(IconListContainer)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const YellowCircle = styled(IconListContainer)`
  background-color: ${(props) => props.theme.yellow};
`

export const GrayCircle = styled(IconListContainer)`
  background-color: ${(props) => props.theme['base-text']};
`

export const PurpleCircle = styled(IconListContainer)`
  background-color: ${(props) => props.theme.purple};
`
