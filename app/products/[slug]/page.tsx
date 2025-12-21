import { Separator } from '@/components/ui/separator';
import ImageGallery from '@/components/image-gallery';
import ProductInfo from '@/components/product-info';
import ProductSpecs from '@/components/product-specs';
import Breadcrumb from '@/components/ui/breadcrumb';
import RelatedProducts from '@/components/related-products';
import { fetchProductDetails } from '@/supabase/server';
import { productObj } from '@/types/product';

interface PageProps {
  params: Promise<{ slug: string }>;
}
const ProductPage = async ({ params }: PageProps) => {
	const { slug } = await params;
	const data = await fetchProductDetails(slug);

	if (!data) {
		return (
			<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background flex items-center justify-center'>
				<p className='text-muted-foreground'>Product not found</p>
			</main>
		);
	}

	return (
		<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background'>
			{/* Breadcrumb */}
			<Breadcrumb category={data.category} name={data.name} />

			{/* Main Product Section */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
				{/* Left Column - Product Gallery */}
				<ImageGallery images={data.images} />

				{/* Right Column - Product Info */}
				<ProductInfo product={data} />
			</div>

			{/* Separator */}
			<Separator className='my-12' />

			{/* Product Specifications */}
			<ProductSpecs specifications={data.specifications} />

			{/* Separator */}
			<Separator className='my-12' />

			{/* Related Products Section*/}
			<section className='space-y-8'>
				<h2 className='text-2xl font-bold text-foreground'>Related Products</h2>
				<RelatedProducts category_id={data.category_id} />
			</section>
		</main>
	);
};

export default ProductPage;
