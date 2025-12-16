// type for cart state
export interface CartState {
	cart: CartItemState[];
}

// type for cart item state
export interface CartItemState {
	id: number;
	name: string;
	variant: string;
	price: number;
	quantity: number;
	image: string;
	inStock: boolean;
}

// type for cart store actions
export type CartActions = {
	addToCart: (CartItem: CartItemState) => void;
	updateCartItem: (
		id: number,
		updates: Partial<Omit<CartState['cart'], 'id'>>
	) => void;
	removeFromCart: (id: number) => void;
};

// type for cart store
export type cartStore = CartState & CartActions;
