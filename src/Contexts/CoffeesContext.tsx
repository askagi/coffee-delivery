import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

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

interface CoffeesContextType {
  coffees: CoffeeType[]
  cart: CartItems[]
  payable: number
  updateCart: (coffeeId: number, quantity: number) => void
  removeCoffeeCart: (coffeeId: number) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [cart, setCart] = useState<CartItems[]>([])
  const [coffees, setCoffees] = useState<CoffeeType[]>([])
  const [payable, setPayable] = useState(0)

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
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
