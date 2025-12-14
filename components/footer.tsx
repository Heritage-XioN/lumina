import { TrendingUp, ArrowRight } from 'lucide-react';
import { FiFacebook } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { LuLinkedin } from 'react-icons/lu';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bottom-o bg-[#0f172b] w-full pt-18 pb-4 px-4 md:px-9 lg:px-20'>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-10'>
				<div>
					<div className='flex flex-wrap gap-2 mb-4'>
						<div className='flex justify-center items-center'>
							<TrendingUp className='w-6 h-6 text-[#4f39f6]' />
						</div>
						<div className='flex justify-center items-center'>
							<Link
								href={'/'}
								className='text-[24px] leading-[133%] text-white font-bold text-center'
							>
								LUMINA
							</Link>
						</div>
					</div>
					<div className='mb-5'>
						<p className='text-[16px] leading-[163%] text-[#909eb4]'>
							Crafting premium essentials for the modern lifestyle. Quality
							meets minimalism in every product we curate.
						</p>
					</div>
					<div className=''>
						<div className='flex flex-wrap gap-4'>
							<Link
								href='#'
								className='text-[16px] leading-[163%] text-white flex justify-center items-center rounded-full w-10 h-10 bg-[#1d293d] hover:bg-[#4f39f6] transition-colors'
							>
								<FiFacebook className='w-[18px] h-[18px]' />
							</Link>
							<Link
								href='#'
								className='text-[16px] leading-[163%] text-white flex justify-center items-center rounded-full w-10 h-10 bg-[#1d293d] hover:bg-[#4f39f6] transition-colors'
							>
								<FaXTwitter className='w-[18px] h-[18px]' />
							</Link>
							<Link
								href='#'
								className='text-[16px] leading-[163%] text-white flex justify-center items-center rounded-full w-10 h-10 bg-[#1d293d] hover:bg-[#4f39f6] transition-colors'
							>
								<FaInstagram className='w-[18px] h-[18px]' />
							</Link>
							<Link
								href='#'
								className='text-[16px] leading-[163%] text-white flex justify-center items-center rounded-full w-10 h-10 bg-[#1d293d] hover:bg-[#4f39f6] transition-colors'
							>
								<LuLinkedin className='w-[18px] h-[18px]' />
							</Link>
						</div>
					</div>
				</div>
				<div>
                    <div className="mb-6">
                        <h3 className="text-[16px] leading-[150%] text-white font-bold">Shop</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={""} className='text-[16px] leading-[150%] text-[#909eb4] hover:text-[#4f39f6] transition-colors'>All Products</Link>
                        <Link href={""} className='text-[16px] leading-[150%] text-[#909eb4] hover:text-[#4f39f6] transition-colors'>New Arrivals</Link>
                        <Link href={""} className='text-[16px] leading-[150%] text-[#909eb4] hover:text-[#4f39f6] transition-colors'>Featured</Link>
                        <Link href={""} className='text-[16px] leading-[150%] text-[#909eb4] hover:text-[#4f39f6] transition-colors'>Sale Collection</Link>
                        <Link href={""} className='text-[16px] leading-[150%] text-[#909eb4] hover:text-[#4f39f6] transition-colors'>Gift Cards</Link>
                    </div>
                </div>
				<div>
                    <div className="mb-6">
                        <h3 className="text-[16px] leading-[150%] text-white font-bold">Support</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={""} className='text-[16px] leading-[150%] text-[#909eb4] hover:text-[#4f39f6] transition-colors'>Help Center</Link>
                        <Link href={""} className='text-[16px] leading-[150%] text-[#909eb4] hover:text-[#4f39f6] transition-colors'>Shipping & Returns</Link>
                        <Link href={""} className='text-[16px] leading-[150%] text-[#909eb4] hover:text-[#4f39f6] transition-colors'>Size Guide</Link>
                        <Link href={""} className='text-[16px] leading-[150%] text-[#909eb4] hover:text-[#4f39f6] transition-colors'>Contact Us</Link>
                        <Link href={""} className='text-[16px] leading-[150%] text-[#909eb4] hover:text-[#4f39f6] transition-colors'>Privacy Policy</Link>
                    </div>
                </div>
				<div>
					<div className="mb-6">
                        <h3 className="text-[16px] leading-[150%] text-white font-bold">Stay Updated</h3>
                    </div>
					<div className='mb-5'>
						<p className='text-[16px] leading-[163%] text-[#909eb4]'>
							Subscribe to our newsletter for exclusive offers and updates.
						</p>
					</div>
					<div className='flex gap-2'>
						<input type="email" placeholder='Enter your email' className='w-full p-2 bg-[#1d293d] text-[#8e949e] placeholder:text-[#8e949e] rounded-lg px-4 py-3' />
                        <button className='w-14 h-12 flex justify-center items-center rounded-lg bg-[#4f39f6] cursor-pointer'><ArrowRight className='text-white w-5 h-5' /></button>
					</div>
				</div>
			</div>
			<div className='border-t border-t-gray-300/10 text-center py-5 text-link-text text-[14px] leading-[143%]'>
				© 2025 Lumina Commerce. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
