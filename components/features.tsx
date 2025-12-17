import { Truck, ShieldCheck, RefreshCcw  } from 'lucide-react';

const Features = () => {
	return (
		<div className='pt-8 pb-20 px-4 md:px-9 lg:px-20 '>
			<div className='grid grid-col-1 md:grid-cols-3 gap-4'>
				<div className='bg-card rounded-lg py-8 px-4'>
					<div className='w-full flex justify-center items-center mb-6'>
                        <div className="w-14 h-14 rounded-full bg-white shadow dark:bg-[#21194a] flex justify-center items-center">
							<Truck className='w-8 h-8 text-[#4f39f6]' />
						</div>
                    </div>
					<div className='w-full text-[18px] leading-[156%] mb-1'>
						<p className='text-[18px] leading-[156%] text-center font-bold'>
							Free Worldwide Shipping
						</p>
					</div>
					<div className='w-full'>
                        <p className="text-[16px] leading-[150%] text-center font-semibold text-link-text">On all orders over $100</p>
                    </div>
				</div>
				<div className='bg-card rounded-lg py-8 px-4'>
					<div className='w-full flex justify-center items-center mb-6'>
                        <div className="w-14 h-14 rounded-full bg-white shadow dark:bg-[#21194a] flex justify-center items-center">
							<ShieldCheck className='w-8 h-8 text-[#4f39f6]' />
						</div>
                    </div>
					<div className='w-full text-[18px] leading-[156%] mb-1'>
						<p className='text-[18px] leading-[156%] text-center font-bold'>
							Secure Payment
						</p>
					</div>
					<div className='w-full'>
                        <p className="text-[16px] leading-[150%] text-center font-semibold text-link-text">100% secure payment methods</p>
                    </div>
				</div>
				<div className='bg-card rounded-lg py-8 px-4'>
					<div className='w-full flex justify-center items-center mb-6'>
                        <div className="w-14 h-14 rounded-full bg-white shadow dark:bg-[#21194a] flex justify-center items-center">
							<RefreshCcw className='w-8 h-8 text-[#4f39f6]' />
						</div>
                    </div>
					<div className='w-full text-[18px] leading-[156%] mb-1'>
						<p className='text-[18px] leading-[156%] text-center font-bold'>
							30 Days Return
						</p>
					</div>
					<div className='w-full'>
                        <p className="text-[16px] leading-[150%] text-center font-semibold text-link-text">Money back guarante</p>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Features;
