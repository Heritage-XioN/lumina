import { createStore } from 'zustand/vanilla';

export interface CartState {
	cart: CartItemState[]
}

export interface CartItemState {
	id: number;
	name: string;
	variant: string;
	price: number;
	quantity: number;
	image: string;
	inStock: boolean;
}

export type CartActions = {
	addToCart: () => void;
	updateCartItem: () => void;
	removeFromCart: () => void;
};

export type cartStore = CartState & CartActions;

export const defaultInitState: CartState = {
	cart: [{
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
	},] as CartItemState[]
};

const cartItem: CartItemState = {
		id: 3,
		name: 'Mechanical Keyboard',
		variant: 'Retro White',
		price: 145.0,
		quantity: 2,
		image: '/window.svg',
		inStock: true,
}

export const createCartStore = (initState: CartState = defaultInitState) => {
	return createStore<cartStore>()((set) => ({
		...initState,
		addToCart: () => set((state) => ({cart: state.cart})),
		updateCartItem: () => set((state) =>  ({cart: state.cart})),
		removeFromCart: () => set((state) =>  ({cart: state.cart})),
	}));
};
