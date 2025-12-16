'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Funnel } from 'lucide-react';
import { useState } from 'react';
import TabsProduct from './tabs-product';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Products = () => {
	const tabItem = [
		{
			value: 'tech',
			label: 'Tech',
		},
		{
			value: 'audio',
			label: 'Audio',
		},
		{
			value: 'furniture',
			label: 'Furniture',
		},
		{
			value: 'apparel',
			label: 'Apparel',
		},
		{
			value: 'accessories',
			label: 'Accessories',
		},
		{
			value: 'home',
			label: 'Home',
		},
	];

	const [value, setValue] = useState('all');

	return (
		<div className='pt-26 pb-20 px-4 md:px-9 lg:px-20'>
			<div className='mb-4'>
				<h3 className='text-[30px] leading-[120%] font-bold'>
					Discover Products
				</h3>
			</div>
			<div className='w-full mb-12'>
				<Tabs defaultValue='all' className='w-full'>
					{/* tab navigation, filter button and result */}
					<div className='flex justify-between items-center'>
						<TabsList className='w-[55%]'>
							<TabsTrigger value='all' onClick={() => setValue('all')}>
								All
							</TabsTrigger>
							{tabItem.map((item) => (
								<TabsTrigger
									key={item.value}
									value={item.value}
									onClick={() => setValue(item.value)}
								>
									{item.label}
								</TabsTrigger>
							))}
						</TabsList>
						<div className='flex gap-1 md:gap-5 items-center'>
							<button className='flex justify-center items-center text-[14px] leading-[143%] '>
								<Funnel className='mr-2 w-4 h-4' />{' '}
								<p className='text-[14px] leading-[143%] hidden md:block'>
									Filter
								</p>
							</button>
							<p className='text-[14px] leading-[143%]'>8 items</p>
						</div>
					</div>
					{/* tab content */}
					<TabsContent value={value} className='pt-6'>
						<TabsProduct value={value} />
					</TabsContent>
				</Tabs>
			</div>
			{/* load more component link */}
			<div className='flex md:hidden lg:flex justify-center items-center w-full'>
				<Link
					href={`/${value}`}
					className='flex justify-center items-center text-link-text text-[16px] leadimg-[150%] rounded-lg border px-6 py-4 hover:bg-card/50 transition-colors dark:border-slate-700 dark:hover:bg-card/80'
				>
					Load more products <ArrowRight className='ml-2 w-4 h-4' />
				</Link>
			</div>
		</div>
	);
};

export default Products;
