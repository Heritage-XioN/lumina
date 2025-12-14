"use client"
import React, { useState } from 'react';

const Quantity = () => {
     const [count, setCount] = useState(1) 
	return (
		<div>
			<div className='w-32 h-9 grid grid-cols-3 border border-gray-300'>
				<div className='flex justify-center items-center'>
					<button onClick={() => setCount(count - 1)}>-</button>
				</div>
				<div className='flex justify-center items-center'>{count}</div>
				<div className='flex justify-center items-center'>
					<button onClick={() => setCount(count + 1)}>+</button>
				</div>
			</div>
		</div>
	);
};

export default Quantity;
