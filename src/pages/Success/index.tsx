import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import Illustration from '../../assets/illustrationSuccess.svg'
import { CoffeesContext } from '../../Contexts/CoffeesContext'
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
  const { formAddress, formPayment } = useContext(CoffeesContext)
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
                  Entrega na{' '}
                  <b>{`${formAddress.street}, ${formAddress.number}`}</b>
                </span>
                <span>{`${formAddress.district} - ${formAddress.city}, ${formAddress.state}`}</span>
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
                  <b>{formPayment.formOfPayment}</b>
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
