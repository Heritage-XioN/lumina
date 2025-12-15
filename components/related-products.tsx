import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { productList } from '../lib/data'
import ProductCard from "./ui/product-card"

const RelatedProducts = () => {
  return (
    <ScrollArea className="w-full rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 space-x-4 p-4">
        {productList.map((items, index) => (
          <ProductCard key={items.id} {...items} image1={items.images[0].src} image2={items.images[1].src} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default RelatedProducts