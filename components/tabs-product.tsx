"use client"
import { useState, useEffect } from 'react';
import ProductCard from './ui/product-card';
import LoadMoreCard from './ui/load-more-card';
import { fetchAllProduct } from '@/supabase/server';
import { productObj } from '@/types/product';
import { supabase } from '@/supabase/client';


const TabsProduct = ({ category_id }: { category_id: string }) => {
	// const gdata = await fetchAllProduct()
	const [data, setData] = useState<productObj[] | null>()
	

	useEffect(() => {
			const loadproducts = async () => {
				try {
					// handles fetching products from supabase
						const { error, data } = await supabase.from('products').select('*,images (*), colour_variants (*), categories (name)');
					
						// handles error
						if (error) {
							console.error('error with getting product: ', error);
							return null;
						}
						
						// returns product if no error
						
						setData(data)
				} catch (error) {
					console.error('Error fetching categories:', error);
				}
			};
	
			loadproducts();
	
		}, []);

	if (!data) {
		return (
			<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background flex items-center justify-center'>
				<p className='text-muted-foreground'>Product not found</p>
			</main>
		);
	}
	

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
			{data.map((items) => (
				<ProductCard key={items.id} {...items} category={items.categories.name} image1={items.images[0].src} image2={items.images[1].src} variant={items.colour_variants[0].name} />
			))}
			{/* load more products card */}
			<LoadMoreCard />
		</div>
	);
};

export default TabsProduct;
