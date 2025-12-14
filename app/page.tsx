import Image from 'next/image';
import HeroSection from '@/components/hero-section';
import Products from '@/components/products';
import Featues from '@/components/featues';
import Discount from '@/components/discount';
import Footer from '@/components/footer';

export default function Home() {
	return (
		<div className=''>
			<HeroSection />
			<Products />
			<Featues />
			<Discount />
			<Footer />
		</div>
	);
}
