import React from 'react';

const FeatureBadge = () => {
	return (
		<div className='grid grid-cols-2 gap-3 pt-4'>
			{[
				'Free Delivery',
				'30 Days Return',
				'2 Year Warranty',
				'Secure Payment',
			].map((feature) => (
				<div
					key={feature}
					className='flex items-center justify-center py-3 px-4 rounded-xl border border-border bg-card/50 text-sm text-muted-foreground hover:border-violet-500/50 transition-colors'
				>
					{feature}
				</div>
			))}
		</div>
	);
};

export default FeatureBadge;
