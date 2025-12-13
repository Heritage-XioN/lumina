import Image from 'next/image';
import HeroSection from '@/components/hero-section';
import Products from '@/components/products';
import Featues from '@/components/featues';
import Discount from '@/components/discount';

export default function Home() {
	return (
		<div className=' mb-96'>
			<HeroSection />
			<Products />
			<Featues />
			<Discount />
		</div>
	);
}
