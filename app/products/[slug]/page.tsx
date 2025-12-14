import RatingComponent from '@/components/ui/product-rating';
import Quantity from '@/components/ui/quantity';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;

	return (
		<div className='pt-32 mb-4 px-4 md:px-9 lg:px-20'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className=''></div>
				<div className=''>
					<div className=''>
						<h3 className=''>Audio</h3>
					</div>
					<div className=''>
						<h1 className=''>Artisan Leather Wallet</h1>
					</div>
					<div className='flex gap-2'>
						<div className=''>
							<h2 className=''>$69.99</h2>
						</div>
						<div className=''>
							<RatingComponent />
						</div>
						<div className=''>
							<p className=''>4.5 (128 Reviews)</p>
						</div>
					</div>
					<div className=''>
						<p className=''>
							Handcrafted from premium full-grain leather, this wallet combines
							timeless style with modern functionality. Designed to last, it
							features multiple card slots, a spacious bill compartment, and
							RFID protection.
						</p>
					</div>
					<div className='flex gap-2 items-center'>
						<div className=''>
							<p className=''>Quantity:</p>
						</div>
						<div className=''>
							<Quantity />
						</div>
					</div>
					<div className='flex gap-2'>
						<button className=''>Add to Cart</button>
						<button className=''>Add to Wishlist</button>
					</div>
				</div>
				<div className=''>
					<div className=''>
						<h2 className=''>Product details</h2>
					</div>
				</div>
				<div className=''>
					<div className=''>
						<h2 className=''>Reviews</h2>
					</div>
				</div>
			</div>
			<div className='w-full'>
				<div className=''>
					<h1 className=''>Related Products</h1>
				</div>
			</div>
		</div>
	);
};
export default page;
