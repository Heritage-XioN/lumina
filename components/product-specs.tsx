import React from 'react';

interface ProductSpec {
	label: string;
	value: string;
}

const ProductSpecs = ({specifications}: {specifications: ProductSpec[]}) => {
	return (
		<section className='space-y-8'>
			<h2 className='text-2xl font-bold text-foreground'>
				Product Specifications
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{specifications.map((spec, index) => (
					<div
						key={index}
						className='flex justify-between items-center py-4 border-b border-border'
					>
						<span className='text-muted-foreground'>{spec.label}</span>
						<span className='text-foreground font-medium'>{spec.value}</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProductSpecs;
