import { CartItemState, CartState, cartStore } from '@/types/cart-store';
import { createStore } from 'zustand/vanilla';

export const defaultInitState: CartState = {
	cart: [
		{
			id: 1,
			name: 'Minimalist Audio Pods',
			variant: 'Obsidian Black',
			price: 199.0,
			quantity: 1,
			image: '/globe.svg',
			inStock: true,
		},
		{
			id: 2,
			name: 'Ergonomic Workspace Chair',
			variant: 'Graphite Grey',
			price: 450.0,
			quantity: 1,
			image: '/file.svg',
			inStock: true,
		},
	] as CartItemState[],
};

const cartItem: CartItemState = {
	id: 3,
	name: 'Mechanical Keyboard',
	variant: 'Retro White',
	price: 145.0,
	quantity: 2,
	image: '/window.svg',
	inStock: true,
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
