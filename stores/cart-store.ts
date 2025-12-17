import { CartItemState, CartState, cartStore } from '@/types/cart-store';
import { createStore } from 'zustand/vanilla';

export const defaultInitState: CartState = {
	cart: []
};


// cart store
export const createCartStore = (initState: CartState = defaultInitState) => {
	return createStore<cartStore>()((set) => ({
		// cart initial state
		...initState,

		// action for adding product from the cart
		addToCart: (CartItem: CartItemState) =>
			set((state) => ({ cart: [...state.cart, CartItem] })),

		// action for updating product from the cart
		updateCartItem: (id: number, updates: Partial<Omit<CartItemState, 'id'>>) =>
			set((state) => ({
				cart: state.cart.map((cartItem) =>
					cartItem.id === id ? { ...cartItem, ...updates } : cartItem
				),
			})),

		// action for removing product from the cart
		removeFromCart: (id: number) =>
			set((state) => ({
				cart: state.cart.filter((cartItem) => cartItem.id !== id),
			})),
	}));
};
