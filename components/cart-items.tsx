'use client'

import { useCartStore } from '@/providers/cart-store-provider'
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
import { CartItem } from '@/types/product';


// Sample cart data
const initialCartItems: CartItem[] = [
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
	{
		id: 3,
		name: 'Mechanical Keyboard',
		variant: 'Retro White',
		price: 145.0,
		quantity: 2,
		image: '/window.svg',
		inStock: true,
	},
];

const CartItems = () => {
	const { cart } = useCartStore(
		(state) => state
	);


	const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
	const [promoCode, setPromoCode] = useState('');

	const updateQuantity = (id: number, delta: number) => {
		setCartItems((prev) =>
			prev.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity + delta) }
					: item
			)
		);
	};

	const removeItem = (id: number) => {
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};
	console.log("my shit",cart.length)
	return (
		<div className='bg-card border-x border-border divide-y divide-border'>
			{cart.map((item) => (
				<div
					key={item.id}
					className='px-6 py-6 flex flex-col sm:flex-row gap-4 sm:gap-6'
				>
					{/* Product Image */}
					<div className='relative w-24 h-24 rounded-xl bg-muted overflow-hidden shrink-0'>
						<Image
							src={item.image}
							alt={item.name}
							fill
							className='object-contain p-3'
						/>
					</div>

					{/* Product Info */}
					<div className='flex-1 min-w-0'>
						<h3 className='font-semibold text-foreground text-lg'>
							{item.name}
						</h3>
						<p className='text-sm text-muted-foreground mt-1'>{item.variant}</p>
						{item.inStock && (
							<div className='flex items-center gap-1.5 mt-2'>
								<span className='w-2 h-2 rounded-full bg-emerald-500' />
								<span className='text-xs text-emerald-500 font-medium'>
									In Stock
								</span>
							</div>
						)}

						{/* Quantity Selector */}
						<div className='flex items-center gap-2 mt-4'>
							<button
								onClick={() => updateQuantity(item.id, -1)}
								className='w-8 h-8 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors text-foreground'
							>
								−
							</button>
							<span className='w-10 text-center text-foreground font-medium'>
								{item.quantity}
							</span>
							<button
								onClick={() => updateQuantity(item.id, 1)}
								className='w-8 h-8 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors text-foreground'
							>
								+
							</button>
						</div>
					</div>

					{/* Price and Remove */}
					<div className='flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4'>
						<div className='text-right'>
							<p className='text-xl font-bold text-foreground'>
								${(item.price * item.quantity).toFixed(2)}
							</p>
							{item.quantity > 1 && (
								<p className='text-sm text-muted-foreground'>
									${item.price.toFixed(2)} each
								</p>
							)}
						</div>
						<button
							onClick={() => removeItem(item.id)}
							className='p-2 text-muted-foreground hover:text-destructive transition-colors'
							aria-label='Remove item'
						>
							<Trash2 className='w-5 h-5' />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default CartItems;
