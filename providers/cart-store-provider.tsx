'use client'

import { type ReactNode, createContext, useState, useContext } from 'react'
import { useStore } from 'zustand'
import { createCartStore } from '@/stores/cart-store'
import { type cartStore } from '@/types/cart-store'
import { CartStoreContext, CartStoreProviderProps } from '@/types/cart-providers'




export const CartStoreProvider = ({
  children,
}: CartStoreProviderProps) => {
  const [store] = useState(() => createCartStore())
  return (
    <CartStoreContext.Provider value={store}>
      {children}
    </CartStoreContext.Provider>
  )
}

export const useCartStore = <T,>(
  selector: (store: cartStore) => T,
): T => {
  const cartStoreContext = useContext(CartStoreContext)
  if (!cartStoreContext) {
    throw new Error(`useCartStore must be used within CartStoreProvider`)
  }

  return useStore(cartStoreContext, selector)
}