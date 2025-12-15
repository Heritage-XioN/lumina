'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Types
interface CartItem {
	id: string;
	name: string;
	variant: string;
	price: number;
	quantity: number;
	image: string;
}

// Sample cart data
const cartItems: CartItem[] = [
	{
		id: '1',
		name: 'Minimalist Audio Pods',
		variant: 'Obsidian Black',
		price: 199.0,
		quantity: 1,
		image: '/globe.svg',
	},
];

type CheckoutStep = 'information' | 'shipping' | 'payment';

const CheckoutPage = () => {
	const [activeStep, setActiveStep] = useState<CheckoutStep>('information');
	const [discountCode, setDiscountCode] = useState('');
	const [emailOffers, setEmailOffers] = useState(false);

	// Form state
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		apartment: '',
		city: '',
		postalCode: '',
		country: 'United States',
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	const steps: { key: CheckoutStep; label: string }[] = [
		{ key: 'information', label: 'Information' },
		{ key: 'shipping', label: 'Shipping' },
		{ key: 'payment', label: 'Payment' },
	];

	return (
		<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background'>
			<div className='max-w-6xl mx-auto'>
				{/* Step Navigation */}
				<nav className='flex items-center gap-6 mb-8'>
					{steps.map((step, index) => (
						<button
							key={step.key}
							onClick={() => setActiveStep(step.key)}
							className={`text-sm font-medium transition-colors ${
								activeStep === step.key
									? 'text-violet-500'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							{step.label}
						</button>
					))}
				</nav>

				<div className='grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12'>
					{/* Left Column - Forms */}
					<div className='space-y-6'>
						{/* Contact Information Section */}
						<section className='bg-card border border-border rounded-2xl p-6 space-y-6'>
							<div className='flex items-center gap-3'>
								<span className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-500 text-white text-sm font-semibold'>
									1
								</span>
								<h2 className='text-xl font-semibold text-foreground'>
									Contact Information
								</h2>
							</div>

							<div className='space-y-4'>
								<div className='space-y-2'>
									<label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
										Email Address
									</label>
									<input
										type='email'
										name='email'
										value={formData.email}
										onChange={handleInputChange}
										placeholder='you@example.com'
										className='w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all'
									/>
								</div>

								<label className='flex items-center gap-3 cursor-pointer'>
									<input
										type='checkbox'
										checked={emailOffers}
										onChange={(e) => setEmailOffers(e.target.checked)}
										className='w-4 h-4 rounded border-border text-violet-500 focus:ring-violet-500/20'
									/>
									<span className='text-sm text-muted-foreground'>
										Email me with news and offers
									</span>
								</label>
							</div>
						</section>

						{/* Shipping Address Section */}
						<section className='bg-card border border-border rounded-2xl p-6 space-y-6'>
							<div className='flex items-center gap-3'>
								<span className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-500 text-white text-sm font-semibold'>
									2
								</span>
								<h2 className='text-xl font-semibold text-foreground'>
									Shipping Address
								</h2>
							</div>

							<div className='space-y-4'>
								{/* Name Fields */}
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div className='space-y-2'>
										<label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
											First Name
										</label>
										<input
											type='text'
											name='firstName'
											value={formData.firstName}
											onChange={handleInputChange}
											placeholder='Jane'
											className='w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all'
										/>
									</div>
									<div className='space-y-2'>
										<label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
											Last Name
										</label>
										<input
											type='text'
											name='lastName'
											value={formData.lastName}
											onChange={handleInputChange}
											placeholder='Doe'
											className='w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all'
										/>
									</div>
								</div>

								{/* Address */}
								<div className='space-y-2'>
									<label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
										Address
									</label>
									<input
										type='text'
										name='address'
										value={formData.address}
										onChange={handleInputChange}
										placeholder='123 Main St'
										className='w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all'
									/>
								</div>

								{/* Apartment */}
								<div className='space-y-2'>
									<label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
										Apartment, Suite, etc.
									</label>
									<input
										type='text'
										name='apartment'
										value={formData.apartment}
										onChange={handleInputChange}
										placeholder='Unit 4B'
										className='w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all'
									/>
								</div>

								{/* City and Postal Code */}
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div className='space-y-2'>
										<label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
											City
										</label>
										<input
											type='text'
											name='city'
											value={formData.city}
											onChange={handleInputChange}
											placeholder='New York'
											className='w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all'
										/>
									</div>
									<div className='space-y-2'>
										<label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
											Postal Code
										</label>
										<input
											type='text'
											name='postalCode'
											value={formData.postalCode}
											onChange={handleInputChange}
											placeholder='10001'
											className='w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all'
										/>
									</div>
								</div>

								{/* Country */}
								<div className='space-y-2'>
									<label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
										Country
									</label>
									<select
										name='country'
										value={formData.country}
										onChange={handleInputChange}
										className='w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all'
									>
										<option value='United States'>United States</option>
										<option value='Canada'>Canada</option>
										<option value='United Kingdom'>United Kingdom</option>
										<option value='Germany'>Germany</option>
										<option value='France'>France</option>
									</select>
								</div>
							</div>
						</section>

						{/* Payment Section */}
						<section className='bg-card border border-border rounded-2xl p-6 space-y-4'>
							<div className='flex items-center gap-3'>
								<span className='w-8 h-8 flex items-center justify-center rounded-full bg-muted text-muted-foreground text-sm font-semibold'>
									3
								</span>
								<h2 className='text-xl font-semibold text-muted-foreground'>
									Payment
								</h2>
							</div>
							<p className='text-sm text-muted-foreground'>
								Enter shipping address to view payment options.
							</p>
						</section>

						{/* Navigation Buttons */}
						<div className='flex items-center justify-between pt-4'>
							<Link
								href='/cart'
								className='text-violet-500 hover:text-violet-600 font-medium transition-colors'
							>
								Return to Cart
							</Link>
							<button className='bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98]'>
								Continue to Shipping
							</button>
						</div>
					</div>

					{/* Right Column - Order Summary */}
					<aside className='lg:sticky lg:top-24 h-fit'>
						<div className='bg-card border border-border rounded-2xl p-6 space-y-6'>
							<h2 className='text-xl font-semibold text-foreground'>
								Order Summary
							</h2>

							{/* Cart Items */}
							<div className='space-y-4'>
								{cartItems.map((item) => (
									<div key={item.id} className='flex gap-4'>
										<div className='relative w-16 h-16 rounded-xl bg-muted overflow-hidden flex-shrink-0'>
											<Image
												src={item.image}
												alt={item.name}
												fill
												className='object-contain p-2'
											/>
										</div>
										<div className='flex-1 min-w-0'>
											<h3 className='font-medium text-foreground truncate'>
												{item.name}
											</h3>
											<p className='text-sm text-muted-foreground'>
												{item.variant}
											</p>
										</div>
										<span className='font-medium text-foreground'>
											${item.price.toFixed(2)}
										</span>
									</div>
								))}
							</div>

							{/* Discount Code */}
							<div className='flex gap-2'>
								<input
									type='text'
									value={discountCode}
									onChange={(e) => setDiscountCode(e.target.value)}
									placeholder='Gift card or discount code'
									className='flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm'
								/>
								<button className='px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity'>
									Apply
								</button>
							</div>

							{/* Order Totals */}
							<div className='space-y-3 pt-4 border-t border-border'>
								<div className='flex justify-between text-sm'>
									<span className='text-muted-foreground'>Subtotal</span>
									<span className='text-foreground font-medium'>
										${subtotal.toFixed(2)}
									</span>
								</div>
								<div className='flex justify-between text-sm'>
									<span className='text-muted-foreground'>Shipping</span>
									<span className='text-muted-foreground'>
										Calculated next step
									</span>
								</div>
							</div>

							{/* Total */}
							<div className='pt-4 border-t border-border'>
								<div className='flex justify-between items-baseline'>
									<span className='text-lg font-semibold text-foreground'>
										Total
									</span>
									<div className='text-right'>
										<span className='text-xs text-muted-foreground block'>
											USD
										</span>
										<span className='text-2xl font-bold text-violet-500'>
											${subtotal.toFixed(2)}
										</span>
									</div>
								</div>
							</div>

							{/* Security Notice */}
							<div className='pt-4 border-t border-border'>
								<p className='text-xs text-muted-foreground leading-relaxed'>
									Your payment information is processed securely. We do not
									store credit card details nor have access to your credit card
									information.
								</p>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</main>
	);
};

export default CheckoutPage;
