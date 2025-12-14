"use client"

const Discount = () => {
  return (
    <div className='relative mt-8 py-24 px-4 md:px-9 lg:px-20 bg-[#4f39f6] dark:bg-violet-900/80 dark:gradient'>
        <div className="absolute inset-0 opacity-20 radialGradient -z-40"></div>
        <div className="w-full flex justify-center items-center mb-6">
          <div className="py-1 px-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/10">
            <p className="text-xs leading-[133%] font-bold text-white">LIMITED TIME OFFER</p>
          </div>
        </div>
        <div className="w-full mb-8">
          <h1 className="text-[48px] leading-[100%] text-center text-white font-bold">Get 20% Off Your First Order</h1>
        </div>
        <div className="w-full flex justify-center items-center mb-10">
          <p className="text-[18px] leading-[156%] text-center text-white w-[576px]">Join the Lumina community and upgrade your lifestyle today. Use code <strong>WELCOME20</strong> at checkout.</p>
        </div>
        <div className="w-full flex justify-center items-center">
          <button  className='px-10 py-4 border bg-white rounded-lg text-[#4f39f6] font-bold shadow-2xl cursor-pointer'>
            Claim Offer
          </button>
        </div>
    </div>
  )
}

export default Discount