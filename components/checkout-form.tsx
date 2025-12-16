"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const CheckoutForm = () => {
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

	return (
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
	);
};

export default CheckoutForm;
