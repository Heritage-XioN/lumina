'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Trash2, Lock } from 'lucide-react';

// Types
interface CartItem {
	id: string;
	name: string;
	variant: string;
	price: number;
	quantity: number;
	image: string;
	inStock: boolean;
}

// Sample cart data
const initialCartItems: CartItem[] = [
	{
		id: '1',
		name: 'Minimalist Audio Pods',
		variant: 'Obsidian Black',
		price: 199.0,
		quantity: 1,
		image: '/globe.svg',
		inStock: true,
	},
	{
		id: '2',
		name: 'Ergonomic Workspace Chair',
		variant: 'Graphite Grey',
		price: 450.0,
		quantity: 1,
		image: '/file.svg',
		inStock: true,
	},
	{
		id: '3',
		name: 'Mechanical Keyboard',
		variant: 'Retro White',
		price: 145.0,
		quantity: 2,
		image: '/window.svg',
		inStock: true,
	},
];

const FREE_SHIPPING_THRESHOLD = 1000;
const SHIPPING_ESTIMATE = 25.0;
const TAX_RATE = 0.08;

const CartPage = () => {
	const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
	const [promoCode, setPromoCode] = useState('');

	const updateQuantity = (id: string, delta: number) => {
		setCartItems((prev) =>
			prev.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity + delta) }
					: item
			)
		);
	};

	const removeItem = (id: string) => {
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
	const shippingProgress = Math.min(
		100,
		(subtotal / FREE_SHIPPING_THRESHOLD) * 100
	);
	const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_ESTIMATE;
	const taxEstimate = subtotal * TAX_RATE;
	const total = subtotal + shipping + taxEstimate;

	return (
		<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background'>
			<div className='max-w-6xl mx-auto'>
				{/* Page Title */}
				<h1 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
					Shopping Cart
				</h1>

				{/* Free Shipping Progress */}
				<div className='bg-card border border-border rounded-2xl p-4 mb-8'>
					<div className='flex items-center gap-3 mb-3'>
						<div className='w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center'>
							<span className='text-violet-500 text-lg'>📦</span>
						</div>
						<p className='text-sm text-foreground'>
							{amountToFreeShipping > 0 ? (
								<>
									Add{' '}
									<span className='text-violet-500 font-semibold'>
										${amountToFreeShipping.toFixed(2)}
									</span>{' '}
									to cart for{' '}
									<span className='font-semibold'>Free Express Shipping</span>
								</>
							) : (
								<span className='text-emerald-500 font-semibold'>
									🎉 You qualify for Free Express Shipping!
								</span>
							)}
						</p>
					</div>
					<div className='w-full h-2 bg-muted rounded-full overflow-hidden'>
						<div
							className='h-full bg-gradient-to-r from-violet-500 to-violet-400 rounded-full transition-all duration-500'
							style={{ width: `${shippingProgress}%` }}
						/>
					</div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12'>
					{/* Left Column - Cart Items */}
					<div className='space-y-0'>
						{/* Header */}
						<div className='bg-card border border-border rounded-t-2xl px-6 py-4 flex justify-between'>
							<span className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
								Product
							</span>
							<span className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
								Details
							</span>
						</div>

						{/* Cart Items */}
						<div className='bg-card border-x border-border divide-y divide-border'>
							{cartItems.map((item) => (
								<div
									key={item.id}
									className='px-6 py-6 flex flex-col sm:flex-row gap-4 sm:gap-6'
								>
									{/* Product Image */}
									<div className='relative w-24 h-24 rounded-xl bg-muted overflow-hidden flex-shrink-0'>
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
										<p className='text-sm text-muted-foreground mt-1'>
											{item.variant}
										</p>
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

						{/* Continue Shopping */}
						<div className='bg-card border border-border rounded-b-2xl px-6 py-4'>
							<Link
								href='/'
								className='text-violet-500 hover:text-violet-600 font-medium transition-colors'
							>
								Continue Shopping
							</Link>
						</div>
					</div>

					{/* Right Column - Order Summary */}
					<aside className='lg:sticky lg:top-24 h-fit'>
						<div className='bg-card border border-border rounded-2xl p-6 space-y-6'>
							<h2 className='text-xl font-semibold text-foreground'>
								Order Summary
							</h2>

							{/* Order Totals */}
							<div className='space-y-3'>
								<div className='flex justify-between text-sm'>
									<span className='text-muted-foreground'>Subtotal</span>
									<span className='text-foreground font-medium'>
										${subtotal.toFixed(2)}
									</span>
								</div>
								<div className='flex justify-between text-sm'>
									<span className='text-muted-foreground'>
										Shipping estimate
									</span>
									<span className='text-foreground font-medium'>
										{shipping === 0 ? (
											<span className='text-emerald-500'>Free</span>
										) : (
											`$${shipping.toFixed(2)}`
										)}
									</span>
								</div>
								<div className='flex justify-between text-sm'>
									<span className='text-muted-foreground'>Tax estimate</span>
									<span className='text-foreground font-medium'>
										${taxEstimate.toFixed(2)}
									</span>
								</div>
							</div>

							{/* Promo Code */}
							<div className='space-y-2'>
								<label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
									Promo Code
								</label>
								<div className='flex gap-2'>
									<input
										type='text'
										value={promoCode}
										onChange={(e) => setPromoCode(e.target.value)}
										placeholder='Enter code'
										className='flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm'
									/>
									<button className='px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity'>
										Apply
									</button>
								</div>
							</div>

							{/* Total */}
							<div className='pt-4 border-t border-border'>
								<div className='flex justify-between items-baseline'>
									<span className='text-lg font-semibold text-foreground'>
										Total
									</span>
									<span className='text-2xl font-bold text-violet-500'>
										${total.toFixed(2)}
									</span>
								</div>
							</div>

							{/* Checkout Button */}
							<Link
								href='/products/checkout'
								className='block w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98]'
							>
								Checkout
							</Link>

							{/* Security Notice */}
							<div className='flex items-center justify-center gap-2 text-muted-foreground'>
								<Lock className='w-4 h-4' />
								<span className='text-xs'>Secure Encrypted Checkout</span>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</main>
	);
};

export default CartPage;
