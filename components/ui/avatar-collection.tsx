import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AvatarCollection = () => {
	return (
		<div>
			<div className='*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale'>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<Avatar>
					<AvatarImage
						src='https://github.com/maxleiter.png'
						alt='@maxleiter'
					/>
					<AvatarFallback>LR</AvatarFallback>
				</Avatar>
				<Avatar>
					<AvatarImage
						src='https://github.com/evilrabbit.png'
						alt='@evilrabbit'
					/>
					<AvatarFallback>ER</AvatarFallback>
				</Avatar>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<Avatar>
					<AvatarImage
						src='https://github.com/maxleiter.png'
						alt='@maxleiter'
					/>
					<AvatarFallback>LR</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
};

export default AvatarCollection;
