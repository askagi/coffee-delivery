import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'
import { viaCep } from '../services/viaCep'
import { formatCurrentCep } from '../utils/formatter'

interface CoffeesContextProviderProps {
  children: ReactNode
}

export interface CoffeeType {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: number
  quantity: number
}

interface CartItems {
  id: number
  quantity: number
}

interface FormAddressType {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
}

interface FormPaymentType {
  formOfPayment: 'credito' | 'debito' | 'dinheiro'
}

interface CoffeesContextType {
  coffees: CoffeeType[]
  cart: CartItems[]
  payable: number
  formAddress: FormAddressType
  formPayment: FormPaymentType
  updateCart: (coffeeId: number, quantity: number) => void
  removeCoffeeCart: (coffeeId: number) => void
  handleFormAddress: (event: any) => void
  fetchAddress: () => void
  handleFormPayment: (event: any) => void
  FormSubmitDeliveryOrderData: () => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [cart, setCart] = useState<CartItems[]>([])
  const [coffees, setCoffees] = useState<CoffeeType[]>([])
  const [payable, setPayable] = useState(0)
  const [formAddress, setFormAddress] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
  })

  const [formPayment, setFormPayment] = useState<FormPaymentType>({
    formOfPayment: 'credito',
  })

  async function fetchCoffees() {
    const response = await api.get('coffees')
    setCoffees(response.data)
  }

  function summary() {
    const total = cart.reduce((accumulator, coffee) => {
      const foundCoffee = coffees.find((item) => item.id === coffee.id)
      if (foundCoffee) {
        accumulator = foundCoffee.price * coffee.quantity + accumulator
      }
      return accumulator
    }, 0)
    setPayable(total)
  }

  function updateCart(id: number, quantity: number) {
    const data = { id, quantity }

    const foundItem = cart.find((item) => item.id === id)
    if (foundItem) {
      foundItem.quantity = quantity
      setCart(cart)
    } else {
      setCart((state) => [...state, data])
    }
    summary()
  }

  function removeCoffeeCart(id: number) {
    const updateCoffeeList = cart.filter((item) => item.id !== id)
    setCart(updateCoffeeList)
  }

  function handleFormAddress({ target }: any) {
    setFormAddress({ ...formAddress, [target.name]: target.value })
    if (target.name === 'cep') {
      setFormAddress({
        ...formAddress,
        [target.name]: formatCurrentCep(target.value),
      })
    }
    if (target.number === 'number') {
      setFormAddress({
        ...formAddress,
        [target.number]: formatCurrentCep(target.value),
      })
    }
  }

  async function fetchAddress() {
    const { data } = await viaCep.get(`${formAddress.cep}/json`)
    setFormAddress({
      ...formAddress,
      city: data.localidade ? data.localidade : formAddress.city,
      street: data.logradouro ? data.logradouro : formAddress.street,
      district: data.bairro ? data.bairro : formAddress.district,
      state: data.uf ? data.uf : formAddress.state,
      complement: data.complemento ? data.complemento : formAddress.complement,
    })
  }

  function handleFormPayment(value: any) {
    setFormPayment({ formOfPayment: value })
  }

  async function FormSubmitDeliveryOrderData() {
    const deliveryOrderData = {
      address: { ...formAddress },
      ...formPayment,
      order: { ...cart },
    }
    console.log(deliveryOrderData)
  }
  useEffect(() => {
    fetchCoffees()
  }, [])

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        cart,
        payable,
        updateCart,
        removeCoffeeCart,
        handleFormAddress,
        formAddress,
        fetchAddress,
        handleFormPayment,
        formPayment,
        FormSubmitDeliveryOrderData,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
