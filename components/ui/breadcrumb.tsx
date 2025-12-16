import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ category, name }: { category: string; name: string }) => {
	return (
		<nav className='flex items-center gap-2 text-sm mb-8'>
			<Link
				href='/'
				className='text-muted-foreground hover:text-foreground transition-colors'
			>
				Home
			</Link>
			<ChevronRight className='w-4 h-4 text-muted-foreground' />
			<span className='text-muted-foreground hover:text-foreground transition-colors'>
				{category}
			</span>
			<ChevronRight className='w-4 h-4 text-muted-foreground' />
			<span className='text-foreground font-medium'>{name}</span>
		</nav>
	);
};

export default Breadcrumb;
