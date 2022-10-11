import styled from 'styled-components'

export const ContainerSuccess = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8rem;
`
export const ContainerOrder = styled.div`
  width: 47%;
`
export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 130%;
  color: ${(props) => props.theme['yellow-dark']};
`

export const Subtitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  font-stretch: 100;
`

export const Gradient = styled.div`
  margin-top: 4rem;
  padding: 1px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-radius: 6px 36px;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  gap: 3.2rem;
  background-color: ${(props) => props.theme.background};
  border-radius: 6px 36px;
`
export const InfoItem = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const IconListContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const YellowDarkCircle = styled(IconListContainer)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const YellowCircle = styled(IconListContainer)`
  background-color: ${(props) => props.theme.yellow};
`

export const PurpleCircle = styled(IconListContainer)`
  background-color: ${(props) => props.theme.purple};
`

export const ContainerIllustration = styled.div`
  object-fit: cover;
  display: flex;
  align-items: flex-end;
`
