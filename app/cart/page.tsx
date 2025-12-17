import Link from 'next/link';
import CartItems from '@/components/cart-items';
import CartOrderSummary from '@/components/cart-order-summary';
import FreeShipingUi from '@/components/ui/free-shiping-ui';



const CartPage = () => {

	return (
		<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background'>
			<div className='max-w-6xl mx-auto'>
				{/* Page Title */}
				<h1 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
					Shopping Cart
				</h1>

				{/* Free Shipping Progress */}
				<FreeShipingUi />

				<div className='grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12'>
					{/* Left Column - Cart Items */}
					<div className='space-y-0'>
						{/* Header */}
						<div className='bg-card border border-border rounded-t-2xl px-6 py-4 flex justify-between'>
							<span className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
								Product
							</span>
							<span className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
								Details
							</span>
						</div>

						{/* Cart Items */}
						<CartItems />

						{/* Continue Shopping */}
						<div className='bg-card border border-border rounded-b-2xl px-6 py-4'>
							<Link
								href='/'
								className='text-violet-500 hover:text-violet-600 font-medium transition-colors'
							>
								Continue Shopping
							</Link>
						</div>
					</div>

					{/* Right Column - Order Summary */}
					<CartOrderSummary />
				</div>
			</div>
		</main>
	);
};

export default CartPage;
