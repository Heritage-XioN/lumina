
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ProductCard from "./ui/product-card"
import { fetchAllProduct } from "@/supabase/server"
import { productObj } from "@/types/product"

const RelatedProducts = async ({ category_id }: { category_id: number }) => {
  const data: productObj[] | null = await fetchAllProduct(category_id)

  if (!data) {
		return (
			<main className='min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background flex items-center justify-center'>
				<p className='text-muted-foreground'>Product not found</p>
			</main>
		);
	}
  return (
    // displays the related products on the products details page
    <ScrollArea className="w-full rounded-md border">
      <div className="flex w-max gap-6 space-x-4 p-4">
        {data.map((items) => (
          <ProductCard key={items.id} {...items} category={items.categories?.name} image1={items.images[0].src} image2={items.images[1].src} variant={items.colour_variants[0].name}/>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default RelatedProducts