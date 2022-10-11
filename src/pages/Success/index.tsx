import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Illustration from '../../assets/illustrationSuccess.svg'
import {
  ContainerIllustration,
  ContainerOrder,
  ContainerSuccess,
  ContainerText,
  Gradient,
  InfoItem,
  OrderInfo,
  PurpleCircle,
  Subtitle,
  Title,
  YellowCircle,
  YellowDarkCircle,
} from './styles'

export function Success() {
  return (
    <ContainerSuccess>
      <ContainerOrder>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>

        <Gradient>
          <OrderInfo>
            <InfoItem>
              <PurpleCircle>
                <MapPin size={16} weight="fill" />
              </PurpleCircle>
              <ContainerText>
                <span>
                  Entrega em <b>Rua João Daniel Martinelli, 102</b>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </ContainerText>
            </InfoItem>

            <InfoItem>
              <YellowCircle>
                <Timer size={16} weight="fill" />
              </YellowCircle>
              <ContainerText>
                <span>Previsão de entrega</span>
                <span>
                  <b>20 min - 30 min</b>
                </span>
              </ContainerText>
            </InfoItem>

            <InfoItem>
              <YellowDarkCircle>
                <CurrencyDollar size={16} />
              </YellowDarkCircle>
              <ContainerText>
                <span>Pagamento na entrega</span>
                <span>
                  <b>Cartão de Crédito</b>
                </span>
              </ContainerText>
            </InfoItem>
          </OrderInfo>
        </Gradient>
      </ContainerOrder>
      <ContainerIllustration>
        <img
          src={Illustration}
          alt="Ilustração de um homem montado em uma lambreta"
        />
      </ContainerIllustration>
    </ContainerSuccess>
  )
}
