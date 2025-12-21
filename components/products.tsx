'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Funnel } from 'lucide-react';
import { useState, useEffect } from 'react';
import TabsProduct from './tabs-product';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { supabase } from '@/supabase/client';

// Define the category type based on your data structure
interface Category {
	id: number;
	name: string;
}

const Products = () => {
	const [categories, setCategories] = useState<Category[] | null>(null);
	const [value, setValue] = useState('all');

	useEffect(() => {
		const loadCategories = async () => {
			try {
				const { data, error } = await supabase.from('categories').select('*');

				if (error) {
					console.error('Error fetching categories h:', error);
					return;
				}

				console.log(data);
				setCategories(data);
			} catch (error) {
				console.error('Error fetching categories:', error);
			}
		};

		loadCategories();

	}, []);

	if (!categories) {
		return (
			<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background flex items-center justify-center'>
				<p className='text-muted-foreground'>Product not found</p>
			</main>
		);
	}

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
							<TabsTrigger value='all'>All</TabsTrigger>
							{categories.map((item) => (
								<TabsTrigger
									key={item.id}
									value={item.name}
									onClick={() => setValue(item.name)}
								>
									{item.name}
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
					<TabsContent value={'all'} className='pt-6'>
						<TabsProduct category_id={''} />
					</TabsContent>
				</Tabs>
			</div>
			{/* load more component link */}
			<div className='flex md:hidden lg:flex justify-center items-center w-full'>
				<Link
					href={`/`}
					className='flex justify-center items-center text-link-text text-[16px] leadimg-[150%] rounded-lg border px-6 py-4 hover:bg-card/50 transition-colors dark:border-slate-700 dark:hover:bg-card/80'
				>
					Load more products <ArrowRight className='ml-2 w-4 h-4' />
				</Link>
			</div>
		</div>
	);
};

export default Products;
