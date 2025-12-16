'use client';

import CheckoutForm from '@/components/checkout-form';
import CheckoutOrderSummary from '@/components/checkout-order-summary';


const CheckoutPage = () => {

	return (
		<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12'>
					{/* Left Column - Forms */}
					<CheckoutForm />

					{/* Right Column - Order Summary */}
					<CheckoutOrderSummary />
				</div>
			</div>
		</main>
	);
};

export default CheckoutPage;
