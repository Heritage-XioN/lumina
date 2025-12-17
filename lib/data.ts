import {
	CartItem,
	ProductColor,
	ProductImage,
	productObj,
	ProductSpec,
} from '@/types/product';

export const productList: productObj[] = [
	{
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
				src: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?q=80&w=736&auto=format&fit=crop',
				alt: 'Audio Pods Front',
			},
			{
				id: 1,
				src: 'https://images.unsplash.com/photo-1608377205849-29e866f59df4?q=80&w=687&auto=format&fit=crop',
				alt: 'Audio Pods Side',
			},
			{
				id: 2,
				src: 'https://images.unsplash.com/photo-1493878777218-cf22a808450c?w=600&auto=format&fit=crop&q=60',
				alt: 'Audio Pods Case',
			},
			{
				id: 3,
				src: 'https://images.unsplash.com/photo-1608304909001-590edb10fcbb?w=600&auto=format&fit=crop&q=60',
				alt: 'Audio Pods Lifestyle',
			},
		] as ProductImage[],
	},
	{
		id: 2,
		name: 'Premium Leather Watch',
		category: 'Accessories',
		price: 349.0,
		originalPrice: 449.0,
		rating: 4.9,
		reviews: 89,
		inStock: true,
		description:
			'Crafted with precision, this premium leather watch combines timeless elegance with modern functionality. Swiss movement ensures accuracy for years to come.',
		colors: [
			{ name: 'Cognac Brown', value: 'brown', bgClass: 'bg-amber-700' },
			{ name: 'Classic Black', value: 'black', bgClass: 'bg-gray-900' },
			{ name: 'Navy Blue', value: 'navy', bgClass: 'bg-blue-900' },
		] as ProductColor[],
		specifications: [
			{ label: 'Movement', value: 'Swiss Quartz' },
			{ label: 'Case Size', value: '42mm' },
			{ label: 'Water Resistance', value: '50 meters' },
			{ label: 'Strap Material', value: 'Italian Leather' },
		] as ProductSpec[],
		images: [
			{
				id: 0,
				src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
				alt: 'Watch Front',
			},
			{
				id: 1,
				src: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&auto=format&fit=crop&q=80',
				alt: 'Watch Side',
			},
			{
				id: 2,
				src: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=80',
				alt: 'Watch Lifestyle',
			},
			{
				id: 3,
				src: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&auto=format&fit=crop&q=80',
				alt: 'Watch Detail',
			},
		] as ProductImage[],
	},
	{
		id: 3,
		name: 'Ultra HD Camera Lens',
		category: 'Photography',
		price: 899.0,
		originalPrice: 1099.0,
		rating: 4.7,
		reviews: 56,
		inStock: true,
		description:
			'Professional-grade camera lens with exceptional sharpness and bokeh. Perfect for portrait and landscape photography with stunning optical performance.',
		colors: [
			{ name: 'Matte Black', value: 'black', bgClass: 'bg-gray-900' },
			{ name: 'Silver Chrome', value: 'silver', bgClass: 'bg-gray-400' },
		] as ProductColor[],
		specifications: [
			{ label: 'Focal Length', value: '50mm f/1.4' },
			{ label: 'Mount Type', value: 'Universal E-Mount' },
			{ label: 'Aperture Blades', value: '11 Rounded' },
			{ label: 'Minimum Focus', value: '0.45m' },
		] as ProductSpec[],
		images: [
			{
				id: 0,
				src: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=600&auto=format&fit=crop&q=80',
				alt: 'Camera Lens Front',
			},
			{
				id: 1,
				src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80',
				alt: 'Camera Lens Side',
			},
			{
				id: 2,
				src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&auto=format&fit=crop&q=80',
				alt: 'Camera Lens Detail',
			},
			{
				id: 3,
				src: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=600&auto=format&fit=crop&q=80',
				alt: 'Camera Setup',
			},
		] as ProductImage[],
	},
	{
		id: 4,
		name: 'Mechanical Gaming Keyboard',
		category: 'Gaming',
		price: 179.0,
		originalPrice: 229.0,
		rating: 4.6,
		reviews: 312,
		inStock: true,
		description:
			'RGB mechanical keyboard with hot-swappable switches and aerospace-grade aluminum frame. Customizable per-key lighting with 16.8 million colors.',
		colors: [
			{ name: 'Space Black', value: 'black', bgClass: 'bg-gray-900' },
			{
				name: 'Arctic White',
				value: 'white',
				bgClass: 'bg-white border border-gray-300 dark:border-gray-600',
			},
			{ name: 'Rose Gold', value: 'rose', bgClass: 'bg-rose-400' },
		] as ProductColor[],
		specifications: [
			{ label: 'Switch Type', value: 'Hot-swappable Mechanical' },
			{ label: 'Key Layout', value: 'Full Size 104 Keys' },
			{ label: 'Lighting', value: 'Per-key RGB' },
			{ label: 'Connection', value: 'USB-C / Wireless' },
		] as ProductSpec[],
		images: [
			{
				id: 0,
				src: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=80',
				alt: 'Keyboard Top',
			},
			{
				id: 1,
				src: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&auto=format&fit=crop&q=80',
				alt: 'Keyboard RGB',
			},
			{
				id: 2,
				src: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
				alt: 'Keyboard Side',
			},
			{
				id: 3,
				src: 'https://images.unsplash.com/photo-1541140134513-85a161dc4a00?w=600&auto=format&fit=crop&q=80',
				alt: 'Keyboard Setup',
			},
		] as ProductImage[],
	},
	{
		id: 5,
		name: 'Wireless Over-Ear Headphones',
		category: 'Audio',
		price: 299.0,
		originalPrice: 379.0,
		rating: 4.8,
		reviews: 203,
		inStock: true,
		description:
			'Immersive audio experience with adaptive noise cancellation and spatial audio. Memory foam ear cushions provide exceptional comfort for extended listening sessions.',
		colors: [
			{ name: 'Midnight Black', value: 'black', bgClass: 'bg-gray-900' },
			{
				name: 'Cloud White',
				value: 'white',
				bgClass: 'bg-white border border-gray-300 dark:border-gray-600',
			},
			{ name: 'Ocean Blue', value: 'blue', bgClass: 'bg-blue-600' },
		] as ProductColor[],
		specifications: [
			{ label: 'Battery Life', value: 'Up to 40 hours' },
			{ label: 'Driver Size', value: '40mm Dynamic' },
			{ label: 'Noise Cancellation', value: 'Adaptive ANC' },
			{ label: 'Codec Support', value: 'LDAC, aptX HD' },
		] as ProductSpec[],
		images: [
			{
				id: 0,
				src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
				alt: 'Headphones Front',
			},
			{
				id: 1,
				src: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80',
				alt: 'Headphones Side',
			},
			{
				id: 2,
				src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80',
				alt: 'Headphones Detail',
			},
			{
				id: 3,
				src: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
				alt: 'Headphones Lifestyle',
			},
		] as ProductImage[],
	},
	{
		id: 6,
		name: 'Smart Fitness Tracker',
		category: 'Wearables',
		price: 149.0,
		originalPrice: 199.0,
		rating: 4.5,
		reviews: 478,
		inStock: true,
		description:
			'Advanced fitness tracking with heart rate monitoring, GPS, and sleep analysis. Water-resistant design perfect for swimming and outdoor activities.',
		colors: [
			{ name: 'Onyx Black', value: 'black', bgClass: 'bg-gray-900' },
			{ name: 'Coral Red', value: 'coral', bgClass: 'bg-red-400' },
			{ name: 'Sage Green', value: 'sage', bgClass: 'bg-emerald-500' },
		] as ProductColor[],
		specifications: [
			{ label: 'Display', value: '1.4" AMOLED' },
			{ label: 'Battery Life', value: 'Up to 14 days' },
			{ label: 'Water Resistance', value: '5 ATM' },
			{ label: 'Sensors', value: 'HR, SpO2, GPS' },
		] as ProductSpec[],
		images: [
			{
				id: 0,
				src: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&auto=format&fit=crop&q=80',
				alt: 'Fitness Tracker Front',
			},
			{
				id: 1,
				src: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&auto=format&fit=crop&q=80',
				alt: 'Fitness Tracker Side',
			},
			{
				id: 2,
				src: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&auto=format&fit=crop&q=80',
				alt: 'Fitness Tracker Lifestyle',
			},
			{
				id: 3,
				src: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=600&auto=format&fit=crop&q=80',
				alt: 'Fitness Tracker Detail',
			},
		] as ProductImage[],
	},
	{
		id: 7,
		name: 'Portable Power Bank',
		category: 'Accessories',
		price: 79.0,
		originalPrice: 99.0,
		rating: 4.7,
		reviews: 567,
		inStock: true,
		description:
			'High-capacity 20000mAh power bank with fast charging support. Compact design with dual USB-C ports and smart device detection for optimal charging.',
		colors: [
			{ name: 'Graphite', value: 'graphite', bgClass: 'bg-gray-700' },
			{ name: 'Silver', value: 'silver', bgClass: 'bg-gray-400' },
			{ name: 'Midnight Blue', value: 'blue', bgClass: 'bg-blue-800' },
		] as ProductColor[],
		specifications: [
			{ label: 'Capacity', value: '20000mAh' },
			{ label: 'Output', value: '65W Fast Charge' },
			{ label: 'Ports', value: '2x USB-C, 1x USB-A' },
			{ label: 'Charging Time', value: '2 hours' },
		] as ProductSpec[],
		images: [
			{
				id: 0,
				src: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&auto=format&fit=crop&q=80',
				alt: 'Power Bank Front',
			},
			{
				id: 1,
				src: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&auto=format&fit=crop&q=80',
				alt: 'Power Bank Side',
			},
			{
				id: 2,
				src: 'https://images.unsplash.com/photo-1618410320928-25228d811631?w=600&auto=format&fit=crop&q=80',
				alt: 'Power Bank Charging',
			},
			{
				id: 3,
				src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80',
				alt: 'Power Bank Lifestyle',
			},
		] as ProductImage[],
	},
	{
		id: 8,
		name: 'Designer Sunglasses',
		category: 'Fashion',
		price: 245.0,
		originalPrice: 295.0,
		rating: 4.9,
		reviews: 134,
		inStock: true,
		description:
			'Handcrafted acetate frames with polarized lenses. UV400 protection meets premium Italian design for the perfect blend of style and eye protection.',
		colors: [
			{ name: 'Tortoise Shell', value: 'tortoise', bgClass: 'bg-amber-600' },
			{ name: 'Classic Black', value: 'black', bgClass: 'bg-gray-900' },
			{
				name: 'Crystal Clear',
				value: 'clear',
				bgClass: 'bg-white border border-gray-300 dark:border-gray-600',
			},
		] as ProductColor[],
		specifications: [
			{ label: 'Frame Material', value: 'Italian Acetate' },
			{ label: 'Lens Type', value: 'Polarized CR-39' },
			{ label: 'UV Protection', value: 'UV400' },
			{ label: 'Bridge Width', value: '20mm' },
		] as ProductSpec[],
		images: [
			{
				id: 0,
				src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=80',
				alt: 'Sunglasses Front',
			},
			{
				id: 1,
				src: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80',
				alt: 'Sunglasses Multiple',
			},
			{
				id: 2,
				src: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&auto=format&fit=crop&q=80',
				alt: 'Sunglasses Detail',
			},
			{
				id: 3,
				src: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&auto=format&fit=crop&q=80',
				alt: 'Sunglasses Lifestyle',
			},
		] as ProductImage[],
	},
];
