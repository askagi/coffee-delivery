import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding-bottom: 15.7rem;
`

export const Title = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 130%;
  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 5.4rem;
`

export const ProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 3.2rem;
`
