import React, { useState } from 'react';
import Image from 'next/image';

interface ProductImage {
	id: number;
	src: string;
	alt: string;
}

const ImageGallery = ({images}: {images: ProductImage[]}) => {
	const [selectedImage, setSelectedImage] = useState(0);
	return (
		<div className='flex gap-4'>
			{/* Thumbnail Gallery */}
			<div className='flex flex-col gap-3'>
				{images.map((img, index) => (
					<button
						key={img.id}
						onClick={() => setSelectedImage(index)}
						className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
							selectedImage === index
								? 'border-violet-500 ring-2 ring-violet-500/20'
								: 'border-transparent hover:border-violet-500/50'
						} bg-card`}
					>
						<Image
							src={img.src}
							alt={img.alt}
							fill
							className='object-cover p-2'
						/>
					</button>
				))}
			</div>

			{/* Main Image */}
			<div className='relative flex-1 aspect-square rounded-2xl overflow-hidden bg-card border border-border'>
				<Image
					src={images[selectedImage]?.src || '/globe.svg'}
					alt='Main Product'
					fill
					className='object-contain p-8'
					priority
				/>
				{/* Floating product element */}
				<div className='absolute top-6 right-6 w-12 h-12 rounded-full bg-white/80 dark:bg-slate-700/80 shadow-lg' />
			</div>
		</div>
	);
};

export default ImageGallery;
