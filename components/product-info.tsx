'use client';
import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Heart, Star } from 'lucide-react';
import FeatureBadge from './ui/feature-badge';
import { ProductColor, productObj } from '@/types/product';
import { CartItemState } from '@/types/cart-store';
import { useCartStore } from '@/providers/cart-store-provider';

const ProductInfo = ({ product }: { product: productObj }) => {
	
	const { addToCart } = useCartStore((state) => state);

	const [selectedColor, setSelectedColor] = useState<ProductColor>(
		product.colors[1]
	);
	const [quantity, setQuantity] = useState(1);
	const handleQuantityChange = (delta: number) => {
		setQuantity((prev: number) => Math.max(1, prev + delta));
	};

	const cartData: CartItemState = {
		id: product.id,
		name: product.name,
		variant: selectedColor.name,
		price: product.price,
		quantity: quantity,
		image: product.images[0].src,
		inStock: true,
	};

	return (
		<div className='space-y-6'>
			{/* Badge and Rating Row */}
			<div className='flex items-center gap-4 flex-wrap'>
				<Badge className='bg-violet-600 hover:bg-violet-700 text-white border-none px-4 py-1.5 text-xs font-semibold uppercase tracking-wide'>
					New Arrival
				</Badge>
				<div className='flex items-center gap-2'>
					<Star className='w-4 h-4 fill-amber-400 text-amber-400' />
					<span className='text-foreground font-medium'>{product.rating}</span>
					<span className='text-muted-foreground'>
						({product.reviews} Reviews)
					</span>
				</div>
			</div>

			{/* Product Title */}
			<h1 className='text-3xl md:text-4xl font-bold text-foreground tracking-tight'>
				{product.name}
			</h1>

			{/* Price */}
			<div className='flex items-center gap-3'>
				<span className='text-2xl md:text-3xl font-bold text-violet-500'>
					${product.price.toFixed(2)}
				</span>
				<span className='text-lg text-muted-foreground line-through'>
					${product.originalPrice.toFixed(2)}
				</span>
			</div>

			{/* Description */}
			<p className='text-muted-foreground leading-relaxed max-w-lg'>
				{product.description}
			</p>

			{/* Color Selector */}
			<div className='space-y-3'>
				<div className='flex items-center gap-2'>
					<span className='text-foreground font-medium'>Color:</span>
					<span className='text-muted-foreground'>{selectedColor.name}</span>
				</div>
				<div className='flex items-center gap-3'>
					{product.colors.map((color) => (
						<button
							key={color.value}
							onClick={() => setSelectedColor(color)}
							className={`w-10 h-10 rounded-full transition-all duration-200 ${
								color.bgClass
							} ${
								selectedColor.value === color.value
									? 'ring-2 ring-violet-500 ring-offset-2 ring-offset-background scale-110'
									: 'hover:scale-105'
							}`}
							aria-label={`Select ${color.name}`}
						/>
					))}
				</div>
			</div>

			{/* Quantity and Stock Status */}
			<div className='space-y-3'>
				<span className='text-foreground font-medium'>Quantity</span>
				<div className='flex items-center gap-4'>
					<div className='flex items-center border border-border rounded-full overflow-hidden bg-transparent'>
						<button
							onClick={() => handleQuantityChange(-1)}
							className='w-12 h-12 flex items-center justify-center text-foreground hover:bg-accent transition-colors text-xl font-medium'
							aria-label='Decrease quantity'
						>
							−
						</button>
						<span className='w-12 text-center text-foreground font-medium'>
							{quantity}
						</span>
						<button
							onClick={() => handleQuantityChange(1)}
							className='w-12 h-12 flex items-center justify-center text-foreground hover:bg-accent transition-colors text-xl font-medium'
							aria-label='Increase quantity'
						>
							+
						</button>
					</div>
					{product.inStock && (
						<div className='flex items-center gap-2'>
							<span className='w-2 h-2 rounded-full bg-emerald-500' />
							<span className='text-emerald-500 font-medium'>In Stock</span>
						</div>
					)}
				</div>
			</div>

			{/* Add to Cart and Wishlist */}
			<div className='flex items-center gap-3'>
				<button
					onClick={() => addToCart(cartData)}
					className='flex-1 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98]'
				>
					Add to Cart - ${(product.price * quantity).toFixed(2)}
				</button>
				<button className='w-14 h-14 flex items-center justify-center border border-border rounded-xl hover:bg-accent transition-colors group'>
					<Heart className='w-6 h-6 text-muted-foreground group-hover:text-violet-500 transition-colors' />
				</button>
			</div>

			{/* Feature Badges */}
			<FeatureBadge />
		</div>
	);
};

export default ProductInfo;
