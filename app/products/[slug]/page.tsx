'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Heart, Star, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ImageGallery from '@/components/image-gallery';
import ProductInfo from '@/components/product-info';

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

interface product {
	name: string;
	category: string;
	price: number;
	originalPrice: number;
	rating: number;
	reviews: number;
	inStock: boolean;
	description: string;
	colors: ProductColor[];
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
				<ProductInfo product={product} />
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
