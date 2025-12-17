"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Lock } from 'lucide-react';
import { useCartStore } from '@/providers/cart-store-provider';



const FREE_SHIPPING_THRESHOLD = 1000;
const SHIPPING_ESTIMATE = 25.0;
const TAX_RATE = 0.08;

const CartOrderSummary = () => {
	const { cart } = useCartStore(
			(state) => state
		);
    
    const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_ESTIMATE;
	const taxEstimate = subtotal * TAX_RATE;
	const total = subtotal + shipping + taxEstimate;
	return (
		<aside className='lg:sticky lg:top-24 h-fit'>
			<div className='bg-card border border-border rounded-2xl p-6 space-y-6'>
				<h2 className='text-xl font-semibold text-foreground'>Order Summary</h2>

				{/* Order Totals */}
				<div className='space-y-3'>
					<div className='flex justify-between text-sm'>
						<span className='text-muted-foreground'>Subtotal</span>
						<span className='text-foreground font-medium'>
							${subtotal.toFixed(2)}
						</span>
					</div>
					<div className='flex justify-between text-sm'>
						<span className='text-muted-foreground'>Shipping estimate</span>
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

				<div className='pt-4 border-t border-border'>
					<div className='flex justify-between items-baseline'>
						<span className='text-lg font-semibold text-foreground'>Total</span>
						<span className='text-2xl font-bold text-violet-500'>
							${total.toFixed(2)}
						</span>
					</div>
				</div>

				{/* Checkout Button */}
				<Link
					href='/checkout'
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
	);
};

export default CartOrderSummary;
