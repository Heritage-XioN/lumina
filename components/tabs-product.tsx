import React from 'react';
import ProductCard from './ui/product-card';
import LoadMoreCard from './ui/load-more-card';


const TabsProduct = ({ value }: { value: string }) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
			<ProductCard />
            <ProductCard />
			<ProductCard />
            <ProductCard />
			<ProductCard />
            <ProductCard />
			<ProductCard />
            <ProductCard />
			{/* load more products card */}
			<LoadMoreCard />
		</div>
	);
};

export default TabsProduct;
