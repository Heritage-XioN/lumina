import Image from 'next/image';
import { Heart, ShoppingBag, StarIcon } from 'lucide-react';
import Link from 'next/link';
import { productCard, productObj } from '@/types/product';
import { useCartStore } from '@/providers/cart-store-provider';
import { CartItemState } from '@/types/cart-store';
import { toast } from 'sonner';



const ProductCard = ({
	id,
	name,
	category,
	price,
	rating,
	reviews,
	image1,
	image2,
	variant,
}: productCard) => {

	const cartData: CartItemState = {
		id: id,
		name: name,
		variant: variant,
		price: price,
		quantity: 1,
		image: image1,
		inStock: true,
	};
	const { addToCart } = useCartStore((state) => state);
	return (
		<div className='w-full max-w-[320px] mx-auto group cursor-pointer dark:bg-slate-900 dark:rounded-2xl dark:border dark:border-slate-800 dark:hover:border-violet-500/30 dark:transition-all dark:duration-300 dark:hover:shadow-2xl dark:hover:shadow-violet-900/10 pb-3'>
			<div className='relative aspect-square bg-gray-100 rounded-2xl overflow-hidden'>
				{/* Badge & Favorite Button */}
				<div className='absolute top-3 left-3 z-20'>
					<span className='bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider text-gray-800 shadow-sm'>
						Best Seller
					</span>
				</div>
				<button className='absolute top-3 right-3 z-20 p-2 rounded-full bg-transparent hover:bg-white/50 transition-colors'>
					<Heart className='w-5 h-5 text-gray-600' />
				</button>

				{/* IMAGE 1: Default View (Behind) */}
				<div className='absolute inset-0 z-0'>
					<Image
						src={image1}
						alt='Product Default'
						fill
						className='object-cover object-center bg-gray-200 transition-transform duration-700 ease-in-out group-hover:scale-110'
					/>
				</div>

				{/* IMAGE 2: Hover View (Front) */}
				<div className='absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10'>
					<Image
						src={image2}
						alt='Product Hover'
						fill
						className='object-cover object-center bg-gray-200 transition-transform duration-700 ease-in-out group-hover:scale-110'
					/>
				</div>

				{/* ADD TO CART BUTTON */}
				<div className='absolute bottom-4 left-4 right-4 z-30 translate-y-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100'>
					<button
						onClick={() => {
						addToCart(cartData);
						toast.success("Event has been created")
					}}
						className='w-full bg-white text-gray-900 font-medium py-3 rounded-xl shadow-lg hover:bg-gray-50 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer'
					>
						<ShoppingBag className='w-4 h-4' />
						Add to Cart
					</button>
				</div>
			</div>

			{/* Product Details */}
			<Link href={`/products/${name}`}>
				<div className='mt-4 flex justify-between px-3 pt-2'>
					<div>
						<h3 className='text-gray-900 font-medium text-lg dark:text-white dark:group-hover:text-violet-300 transition-colors'>
							{name}
						</h3>
						<p className='text-gray-500 text-sm mt-1 dark:text-violet-400'>
							{category}
						</p>
					</div>
					<div className='flex flex-col justify-between grow shrink'>
						<span className='text-gray-900 font-medium text-lg dark:text-white flex justify-end items-center'>
							${price}
						</span>
						<div className='flex justify-end items-center gap-1 mt-2 '>
							<Image src={'/star.png'} alt='star' width={16} height={16} />
							<p className='text-xs leading-[133%]'>{rating}</p>
							<p className='text-xs leading-[133%] text-link-text'>
								({reviews})
							</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
