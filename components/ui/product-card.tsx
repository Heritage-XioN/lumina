import Image from 'next/image';
import { Heart, ShoppingBag, StarIcon } from 'lucide-react';


const ProductCard = () => {
	return (
		<div className='w-full max-w-[320px] mx-auto group cursor-pointer'>
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
						src='https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop'
						alt='Product Default'
						fill
						className='object-cover object-center bg-gray-200 transition-transform duration-700 ease-in-out group-hover:scale-110'
					/>
				</div>

				{/* IMAGE 2: Hover View (Front) */}
				<div className='absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10'>
					<Image
						src='https://images.unsplash.com/photo-1629367494173-c78a56567877?q=80&w=1000&auto=format&fit=crop'
						alt='Product Hover'
						fill
						className='object-cover object-center bg-gray-200 transition-transform duration-700 ease-in-out group-hover:scale-110'
					/>
				</div>

				{/* ADD TO CART BUTTON */}
				<div className='absolute bottom-4 left-4 right-4 z-30 translate-y-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100'>
					<button
						onClick={() => console.log('testing cart button')}
						className='w-full bg-white text-gray-900 font-medium py-3 rounded-xl shadow-lg hover:bg-gray-50 flex items-center justify-center gap-2 transition-transform active:scale-95'
					>
						<ShoppingBag className='w-4 h-4' />
						Add to Cart
					</button>
				</div>
			</div>

			{/* Product Details */}
			<div className='mt-4 flex justify-between items-start'>
				<div>
					<h3 className='text-gray-900 font-medium text-lg'>
						Minimalist Audio
					</h3>
					<p className='text-gray-500 text-sm mt-1'>Audio</p>
				</div>
				<div>
					<span className='text-gray-900 font-medium text-lg'>$199.00</span>
					<div className='flex justify-center items-center gap-1 mt-2'>
						<Image src={"/star.png"} alt='star' width={16} height={16} />
            <p className='text-xs leading-[133%]'>4.9</p>
            <p className='text-xs leading-[133%] text-link-text'>(25)</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
