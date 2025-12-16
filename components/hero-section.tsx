import Image from 'next/image';
import AvatarCollection from './ui/avatar-collection';
import RatingComponent from './ui/rating';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<div className='relative pt-32 pb-20 px-4 md:px-9 lg:px-20 bg-gray-background bg-hero-glow shadow-2xl shadow-violet-400/10'>
			<div className='absolute top-0 left-0 w-full h-full bg-glow z-0 pointer-events-none'></div>
			{/* collections tag */}
			<div className='w-full mb-4 flex justify-center items-center md:block'>
				<div className='bg-[#e0e7ff] w-[50%] md:w-[20%] lg:w-[15%] flex justify-center items-center rounded-full'>
					<p className='text-center text-xs leading-7 font-bold text-[#432dd7]'>
						New collection 2025
					</p>
				</div>
			</div>
			<div className='block md:flex py-4 mb-4'>
				{/* left container */}
				<div className='grow shrink basis-full md:basis-1/2'>
					<div className='text-4xl lg:text-7xl font-bold leading-[110%] mb-6 text-center md:text-left'>
						<h1 className=''>Redefine Your</h1>
						<h1 className=' text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400'>
							Daily Essentials
						</h1>
					</div>
					<div className='mb-6 md:w-[90%]'>
						<p className='text-[18px] leading-[163%] font-medium text-link-text text-center md:text-left'>
							Discover a curated selection of premium goods designed to elevate
							your everyday life. Minimalist design meets maximum functionality.
						</p>
					</div>
					<div className='mb-6 flex justify-center md:justify-start'>
						<div className='flex gap-6'>
							<Link
								href={''}
								className='bg-primary text-primary-foreground dark:bg-violet-700 dark:text-white px-6 lg:py-4 lg:px-8 md:py-2 md:px-4 flex justify-center items-center lg:text-[16px] lg:leading-[150%] font-medium rounded-lg text-center dark:bg-linear-to-r from-violet-400 to-fuchsia-400'
							>
								Shop now <ArrowRight className='ml-1 text-center w-4 h-4' />
							</Link>
							<Link
								href={''}
								className='bg-background text-primary py-4 px-6 md:py-2 md:px-4 lg:py-4 lg:px-8 text-[16px] leading-[150%] font-medium rounded-lg border'
							>
								view Lookbook
							</Link>
						</div>
					</div>
				</div>
				{/* right container */}
				<div className='relative group grow shrink basis-1/2 p-2 flex justify-center '>
					<div className='absolute inset-0 bg-violet-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 -z-1'></div>
					<Image
						src={
							'https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						alt='hero-image'
						width={700}
						height={700}
						loading='eager'
						className='shadow-lg rounded-2xl transform hover:scale-105 transition-transform duration-700'
					/>
				</div>
			</div>
			{/* customers rating */}
			<div className='w-full flex justify-start items-center gap-8'>
				<AvatarCollection />
				<div className=''>
					<div className=''>
						<RatingComponent />
					</div>
					<div className=''>
						<p className='text-[14px] leading-[143%]'>
							Trusted by happy customer
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
