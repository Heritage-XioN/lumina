import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from '@/components/ui/input-group';
import { SearchIcon } from 'lucide-react';

const SearchInput = () => {
	return (
		<InputGroup className='rounded-full'>
			<InputGroupInput placeholder='Search...' />
			<InputGroupAddon>
				<SearchIcon />
			</InputGroupAddon>
			<InputGroupAddon align='inline-end'>
				<InputGroupButton className='hover:bg-card rounded-lg transition-colors text-link-text'>Search</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	);
};

export default SearchInput;
