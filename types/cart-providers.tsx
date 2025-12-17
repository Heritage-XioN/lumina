import { type ReactNode, createContext } from 'react'
import { createCartStore } from '@/stores/cart-store'


export type CartStoreApi = ReturnType<typeof createCartStore>

export const CartStoreContext = createContext<CartStoreApi | undefined>(
  undefined,
)

export interface CartStoreProviderProps {
  children: ReactNode
}