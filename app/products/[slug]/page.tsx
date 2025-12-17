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
	id: 1,
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
		{
			id: 0,
			src: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			alt: 'View 0',
		},
		{
			id: 1,
			src: 'https://images.unsplash.com/photo-1608377205849-29e866f59df4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			alt: 'View 1',
		},
		{
			id: 2,
			src: 'https://images.unsplash.com/photo-1621095782689-b496a07e3fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
			alt: 'View 2',
		},
		{
			id: 3,
			src: 'https://images.unsplash.com/photo-1510674485131-dc88d96369b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8',
			alt: 'View 3',
		},
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
