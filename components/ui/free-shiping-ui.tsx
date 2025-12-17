"use client"

import { useCartStore } from '@/providers/cart-store-provider';
import { CartItem } from '@/types/product';
import React, { useState } from 'react';



const FREE_SHIPPING_THRESHOLD = 1000;
const FreeShipingUi = () => {
	const { cart } = useCartStore(
			(state) => state
		);
	
	const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
	const shippingProgress = Math.min(
		100,
		(subtotal / FREE_SHIPPING_THRESHOLD) * 100
	);
	return (
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
					className='h-full bg-linear-to-r from-violet-500 to-violet-400 rounded-full transition-all duration-500'
					style={{ width: `${shippingProgress}%` }}
				/>
			</div>
		</div>
	);
};

export default FreeShipingUi;
