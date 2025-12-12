import { ArrowRight } from 'lucide-react'
import Link from 'next/link'


const LoadMoreCard = () => {
  return (
    <Link className='hidden md:block lg:hidden text-link-text text-[16px] leadimg-[150%] ' href={""}>
        <div className="w-full max-w-[320px] mx-auto group cursor-pointer ">
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden flex justify-center items-center border-link-text border hover:bg-card transition-colors">
                <p className="">load more products</p><ArrowRight className='ml-2 w-4 h-4' />
            </div>
        </div>
    </Link>
  )
}

export default LoadMoreCard