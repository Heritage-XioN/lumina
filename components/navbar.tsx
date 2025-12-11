import { TrendingUp , User, ShoppingCart, Search, Menu } from 'lucide-react';
import Link from 'next/link';
import SearchInput from './searchInput';
import ThemeSwitcherWrapper from './theme-switcher';
import { Badge } from './ui/badge';

const Navbar = () => {
	return (
		<div className='fixed w-full py-4 px-4 md:px-9 lg:px-20 bg-gray-background text-gray-foreground flex flex-wrap justify-between items-center'>
			<div className='flex flex-wrap gap-2 md:gap-8 shrink basis-auto'>
                <div className="flex justify-center items-center md:hidden w-9 h-9">
                    <Menu className='w-7 h-7' />
                </div>
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
				<div className='hidden md:flex gap-6 justify-between items-center text-[13px] leading-5 font-medium text-link-text'>
					<Link href={'#'}> Shop now</Link>
					<Link href={'#'}> About</Link>
					<Link href={'#'}> Contact</Link>
				</div>
			</div>
			<div className='flex flex-wrap lg:gap-8 shrink basis-auto'>
				<div className='flex flex-wrap gap-4'>
					<div className='md:flex justify-center items-center hidden'>
						<ThemeSwitcherWrapper />
					</div>
					<div className='hidden lg:flex justify-center items-center'>
						<SearchInput />
					</div>
					<div className='lg:hidden flex justify-center items-center w-10 h-10'>
						<Search />
					</div>
				</div>
				<div className='flex flex-wrap'>
					<div className='hidden md:flex justify-center items-center w-10 h-10'>
						<Link href={'/about'}>
							<User />
						</Link>
					</div>
					<div className='flex justify-center items-center w-10 h-10'>
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
