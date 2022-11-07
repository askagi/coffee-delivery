import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import introImg from '../../../../assets/intro.png'
import {
  GrayCircle,
  HeaderContainer,
  ItemList,
  LeftContent,
  List,
  ListGroup,
  PurpleCircle,
  RightContent,
  Subtitle,
  Title,
  YellowCircle,
  YellowDarkCircle,
} from './styles'

export function Header() {
  useEffect(() => {
    const sr = ScrollReveal()
    sr.reveal('.itemLeft', {
      duration: 1000,
      delay: 400,
      origin: 'left',
      distance: '30px',
    })
    sr.reveal('.itemRight', {
      duration: 3000,
      delay: 1000,
    })
  }, [])
  return (
    <HeaderContainer>
      <LeftContent className="itemLeft">
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>

        <ListGroup>
          <List>
            <ItemList>
              <YellowDarkCircle>
                <ShoppingCart size={18} weight="fill" />
              </YellowDarkCircle>
              Compra simples e segura
            </ItemList>
            <ItemList>
              <YellowCircle>
                <Timer size={18} weight="fill" />
              </YellowCircle>
              Entrega rápida e rastreada
            </ItemList>
          </List>
          <List>
            <ItemList>
              <GrayCircle>
                <Package size={18} weight="fill" />
              </GrayCircle>
              Embalagem mantém o café intacto
            </ItemList>
            <ItemList>
              <PurpleCircle>
                <Coffee size={18} weight="fill" />
              </PurpleCircle>
              O café chega fresquinho até você
            </ItemList>
          </List>
        </ListGroup>
      </LeftContent>

      <RightContent className="itemRight">
        <img src={introImg} alt="Copo branco" />
      </RightContent>
    </HeaderContainer>
  )
}
