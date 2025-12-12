import Image from 'next/image';
import HeroSection from '@/components/hero-section';
import Products from '@/components/products';

export default function Home() {
	return (
		<div className=' mb-96'>
			<HeroSection />
			<Products />
		</div>
	);
}
