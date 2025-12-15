'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Heart, Star, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ImageGallery from '@/components/image-gallery';

// Product data type
interface ProductColor {
	name: string;
	value: string;
	bgClass: string;
}

interface ProductSpec {
	label: string;
	value: string;
}

interface ProductImage {
	id: number;
	src: string;
	alt: string;
}

// Sample product data
const product = {
	name: 'Minimalist Audio Pods',
	category: 'Audio',
	price: 199.0,
	originalPrice: 249.0,
	rating: 4.8,
	reviews: 124,
	inStock: true,
	description:
		'Experience pure sound with active noise cancellation and a transparency mode that lets the world back in. Designed for all-day comfort with a customizable fit.',
	colors: [
		{
			name: 'Pearl White',
			value: 'white',
			bgClass: 'bg-white border border-gray-300 dark:border-gray-600',
		},
		{ name: 'Obsidian Black', value: 'black', bgClass: 'bg-gray-900' },
		{ name: 'Violet', value: 'violet', bgClass: 'bg-violet-500' },
	] as ProductColor[],
	specifications: [
		{ label: 'Battery Life', value: 'Up to 24 hours' },
		{ label: 'Water Resistance', value: 'IPX4 Rated' },
		{ label: 'Connectivity', value: 'Bluetooth 5.3' },
		{ label: 'Charging', value: 'USB-C & Wireless' },
	] as ProductSpec[],
	images: [
		{ id: 0, src: '/globe.svg', alt: 'View 0' },
		{ id: 1, src: '/file.svg', alt: 'View 1' },
		{ id: 2, src: '/window.svg', alt: 'View 2' },
		{ id: 3, src: '/next.svg', alt: 'View 3' },
	] as ProductImage[],
};

const ProductPage = () => {
	const [selectedColor, setSelectedColor] = useState<ProductColor>(
		product.colors[1]
	);
	const [quantity, setQuantity] = useState(1);
	const [selectedImage, setSelectedImage] = useState(0);

	const handleQuantityChange = (delta: number) => {
		setQuantity((prev) => Math.max(1, prev + delta));
	};

	return (
		<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background'>
			{/* Breadcrumb */}
			<nav className='flex items-center gap-2 text-sm mb-8'>
				<Link
					href='/'
					className='text-muted-foreground hover:text-foreground transition-colors'
				>
					Home
				</Link>
				<ChevronRight className='w-4 h-4 text-muted-foreground' />
				<Link
					href='/products'
					className='text-muted-foreground hover:text-foreground transition-colors'
				>
					{product.category}
				</Link>
				<ChevronRight className='w-4 h-4 text-muted-foreground' />
				<span className='text-foreground font-medium'>{product.name}</span>
			</nav>

			{/* Main Product Section */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
				{/* Left Column - Product Gallery */}
				<ImageGallery images={product.images} />

				{/* Right Column - Product Info */}
				<div className='space-y-6'>
					{/* Badge and Rating Row */}
					<div className='flex items-center gap-4 flex-wrap'>
						<Badge className='bg-violet-600 hover:bg-violet-700 text-white border-none px-4 py-1.5 text-xs font-semibold uppercase tracking-wide'>
							New Arrival
						</Badge>
						<div className='flex items-center gap-2'>
							<Star className='w-4 h-4 fill-amber-400 text-amber-400' />
							<span className='text-foreground font-medium'>
								{product.rating}
							</span>
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
							<span className='text-muted-foreground'>
								{selectedColor.name}
							</span>
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
						<button className='flex-1 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98]'>
							Add to Cart - ${(product.price * quantity).toFixed(2)}
						</button>
						<button className='w-14 h-14 flex items-center justify-center border border-border rounded-xl hover:bg-accent transition-colors group'>
							<Heart className='w-6 h-6 text-muted-foreground group-hover:text-violet-500 transition-colors' />
						</button>
					</div>

					{/* Feature Badges */}
					<div className='grid grid-cols-2 gap-3 pt-4'>
						{[
							'Free Delivery',
							'30 Days Return',
							'2 Year Warranty',
							'Secure Payment',
						].map((feature) => (
							<div
								key={feature}
								className='flex items-center justify-center py-3 px-4 rounded-xl border border-border bg-card/50 text-sm text-muted-foreground hover:border-violet-500/50 transition-colors'
							>
								{feature}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Separator */}
			<Separator className='my-12' />

			{/* Product Specifications */}
			<section className='space-y-8'>
				<h2 className='text-2xl font-bold text-foreground'>
					Product Specifications
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{product.specifications.map((spec, index) => (
						<div
							key={index}
							className='flex justify-between items-center py-4 border-b border-border'
						>
							<span className='text-muted-foreground'>{spec.label}</span>
							<span className='text-foreground font-medium'>{spec.value}</span>
						</div>
					))}
				</div>
			</section>

			{/* Separator */}
			<Separator className='my-12' />

			{/* Related Products Section (placeholder) */}
			<section className='space-y-8'>
				<h2 className='text-2xl font-bold text-foreground'>Related Products</h2>
				<div className='text-muted-foreground'>
					Related products will be displayed here.
				</div>
			</section>
		</main>
	);
};

export default ProductPage;
