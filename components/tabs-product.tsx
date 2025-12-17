import React from 'react';
import ProductCard from './ui/product-card';
import LoadMoreCard from './ui/load-more-card';
import { productList } from '../lib/data';

const TabsProduct = ({ value }: { value: string }) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
			{productList.map((items) => (
				<ProductCard key={items.id} {...items} image1={items.images[0].src} image2={items.images[1].src} variant={items.colors[0].name} />
			))}
			{/* load more products card */}
			<LoadMoreCard />
		</div>
	);
};

export default TabsProduct;
