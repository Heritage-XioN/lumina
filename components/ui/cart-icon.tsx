'use client';

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { Badge } from './badge';
import { useCartStore } from '@/providers/cart-store-provider';

const CartIcon = () => {
	const { cart } = useCartStore((state) => state);
	return (
		<Link href={'/cart'} className='relative cursor-pointer'>
			<ShoppingBag />
			{cart.length === 0 ? (
				''
			) : (
				<Badge className='bg-destructive dark:text-white absolute bottom-0 z-50 w-4 h-4 font-bold text-[12px] '>
					{cart.length}
				</Badge>
			)}
		</Link>
	);
};

export default CartIcon;
