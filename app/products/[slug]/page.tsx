'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Heart, Star, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ImageGallery from '@/components/image-gallery';
import ProductInfo from '@/components/product-info';
import ProductSpecs from '@/components/product-specs';
import Breadcrumb from '@/components/ui/breadcrumb';
import RelatedProducts from '@/components/related-products';

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

// example product data
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
	return (
		<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background'>
			{/* Breadcrumb */}
			<Breadcrumb category={product.category} name={product.name} />

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
			<ProductSpecs specifications={product.specifications} />

			{/* Separator */}
			<Separator className='my-12' />

			{/* Related Products Section*/}
			<section className='space-y-8'>
				<h2 className='text-2xl font-bold text-foreground'>Related Products</h2>
				<RelatedProducts />
			</section>
		</main>
	);
};

export default ProductPage;
