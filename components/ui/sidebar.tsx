import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
	return (
		<div className='bg-background text-link-text w-[20%] px-6 py-6 '>
			<div className='border-r border-r-link-text h-full px-4 pt-8'>
				<div className=''>
					<h2 className=''>Category</h2>
				</div>
        <div className="">
          <Link href={"/products/"}>All</Link>
        </div>
			</div>
		</div>
	);
};

export default Sidebar;
