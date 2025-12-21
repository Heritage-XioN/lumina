import HeroSection from '@/components/hero-section';
import Products from '@/components/products';
import Features from '@/components/features';
import Discount from '@/components/discount';
import Footer from '@/components/footer';
import { fetchProductDetails } from '@/supabase/server';

export default async function Home() {
	return (
		<div className=''>
			{/* hero section */}
			<HeroSection />
			{/* products secion */}
			<Products />
			{/* features section */}
			<Features />
			{/* discount section */}
			<Discount />
			{/* footer section */}
			<Footer />
		</div>
	);
}
