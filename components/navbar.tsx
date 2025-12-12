import { TrendingUp , User, ShoppingCart, Search, Menu } from 'lucide-react';
import Link from 'next/link';
import SearchInput from './searchInput';
import ThemeSwitcherWrapper from './theme-switcher';
import { Badge } from './ui/badge';

const Navbar = () => {
	return (
		<div className='fixed w-full py-4 px-4 md:px-9 lg:px-20 bg-gray-background text-gray-foreground flex flex-wrap justify-between items-center z-50'>
			{/* left container */}
			<div className='flex flex-wrap gap-2 md:gap-8 shrink basis-auto'>
				{/* menu btn */}
                <div className="flex justify-center items-center md:hidden w-9 h-9 hover:bg-card rounded-lg transition-colors">
                    <Menu className='w-7 h-7' />
                </div>
				{/* logo */}
				<div className='flex flex-wrap gap-2'>
					<div className='w-9 h-9 flex justify-center items-center bg-primary rounded-[10px] border'>
						<TrendingUp  className='text-primary-foreground w-6 h-6' />
					</div>
					<div className='flex justify-center items-center'>
						<Link href={"/"} className='text-[23px] leading-[23px] font-bold text-center'>
							LUMINA
						</Link>
					</div>
				</div>
				{/* nav links */}
				<div className='hidden md:flex gap-3 justify-between items-center text-[13px] leading-5 font-medium text-link-text'>
					<Link href={'#'} className='hover:bg-card rounded-lg transition-colors p-2'> Shop now</Link>
					<Link href={'#'} className='hover:bg-card rounded-lg transition-colors p-2'> About</Link>
					<Link href={'#'} className='hover:bg-card rounded-lg transition-colors p-2'> Contact</Link>
				</div>
			</div>
			{/* right container */}
			<div className='flex flex-wrap lg:gap-8 shrink basis-auto'>
				<div className='flex flex-wrap gap-4'>
					{/* theme toggler */}
					<div className='md:flex justify-center items-center hidden'>
						<ThemeSwitcherWrapper />
					</div>
					{/* search input and icon */}
					<div className='hidden lg:flex justify-center items-center'>
						<SearchInput />
					</div>
					<div className='lg:hidden flex justify-center items-center w-10 h-10 hover:bg-card rounded-full p-1'>
						<Search />
					</div>
				</div>
				<div className='flex flex-wrap'>
					{/* user icon */}
					<div className='hidden md:flex justify-center items-center w-10 h-10 hover:bg-card rounded-full p-1'>
						<Link href={'/about'}>
							<User />
						</Link>
					</div>
					{/* Shopping Cart */}
					<div className='flex justify-center items-center w-10 h-10 hover:bg-card rounded-full p-1 transition-colors'>
						<button className='relative cursor-pointer'>
							<ShoppingCart />
							<Badge className='bg-destructive dark:text-white absolute bottom-0 z-50 w-4 h-4 font-bold text-[8px] '>
								25
							</Badge>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
