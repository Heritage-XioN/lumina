"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/providers/cart-store-provider';

const FREE_SHIPPING_THRESHOLD = 1000;
const SHIPPING_ESTIMATE = 25.0;
const TAX_RATE = 0.08;

const CheckoutOrderSummary = () => {
	const { cart } = useCartStore(
				(state) => state
			);

    const [discountCode, setDiscountCode] = useState('');
    const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_ESTIMATE;
	const taxEstimate = subtotal * TAX_RATE;
	const shippingAndTaskEstimate = shipping + taxEstimate
	const total = subtotal + shipping + taxEstimate;
	return (
		<aside className='lg:sticky lg:top-24 h-fit'>
			<div className='bg-card border border-border rounded-2xl p-6 space-y-6'>
				<h2 className='text-xl font-semibold text-foreground'>Order Summary</h2>

				{/* Cart Items */}
				<div className='space-y-4'>
					{cart.map((item) => (
						<div key={item.id} className='flex gap-4'>
							<div className='relative w-16 h-16 rounded-xl bg-muted overflow-hidden shrink-0'>
								<Image
									src={item.image}
									alt={item.name}
									fill
									className=''
								/>
							</div>
							<div className='flex-1 min-w-0'>
								<h3 className='font-medium text-foreground truncate'>
									{item.name}
								</h3>
								<p className='text-sm text-muted-foreground'>{item.variant}</p>
							</div>
							<span className='font-medium text-foreground'>
								${item.price.toFixed(2)}
							</span>
						</div>
					))}
				</div>

				{/* Discount Code */}
				<div className='flex gap-2'>
					<input
						type='text'
						value={discountCode}
						onChange={(e) => setDiscountCode(e.target.value)}
						placeholder='Gift card or discount code'
						className='flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm'
					/>
					<button className='px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity'>
						Apply
					</button>
				</div>

				{/* Order Totals */}
				<div className='space-y-3 pt-4 border-t border-border'>
					<div className='flex justify-between text-sm'>
						<span className='text-muted-foreground'>Subtotal</span>
						<span className='text-foreground font-medium'>
							${subtotal.toFixed(2)}
						</span>
					</div>
					<div className='flex justify-between text-sm'>
						<span className='text-muted-foreground'>Shipping and Tax</span>
						<span className='text-muted-foreground'>${shippingAndTaskEstimate.toFixed(2)}</span>
					</div>
				</div>

				{/* Total */}
				<div className='pt-4 border-t border-border'>
					<div className='flex justify-between items-baseline'>
						<span className='text-lg font-semibold text-foreground'>Total</span>
						<div className='text-right'>
							<span className='text-xs text-muted-foreground block'>USD</span>
							<span className='text-2xl font-bold text-violet-500'>
								${total.toFixed(2)}
							</span>
						</div>
					</div>
				</div>

				{/* Security Notice */}
				<div className='pt-4 border-t border-border'>
					<p className='text-xs text-muted-foreground leading-relaxed'>
						Your payment information is processed securely. We do not store
						credit card details nor have access to your credit card information.
					</p>
				</div>
			</div>
		</aside>
	);
};

export default CheckoutOrderSummary;
