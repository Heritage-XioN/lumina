import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, Menu, Search, Settings, User } from 'lucide-react';
import Link from 'next/link';

export function MenuBtn() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='link'>
					<Menu className='w-9 h-9' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56' align='start'>
				<DropdownMenuItem>
					<Link href={'/search'}>Search</Link>
                    <DropdownMenuShortcut><Search className='text-violet-400'  /></DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
                    <DropdownMenuLabel className='text-violet-400'>Category</DropdownMenuLabel>
					<DropdownMenuItem>Tech</DropdownMenuItem>
                    <DropdownMenuItem>Clothing</DropdownMenuItem>
                    <DropdownMenuItem>Home</DropdownMenuItem>
                    <DropdownMenuItem></DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Profile
						<DropdownMenuShortcut><User className='text-violet-400' /></DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Settings
						<DropdownMenuShortcut><Settings className='text-violet-400'  /> </DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Log out
						<DropdownMenuShortcut><LogOut  className='text-violet-400'  /></DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
