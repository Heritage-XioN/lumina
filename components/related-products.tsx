import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import ProductCard from "./ui/product-card"

const RelatedProducts = () => {
  return (
    <ScrollArea className="w-full rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 space-x-4 p-4">
        {[1,2,2,2,2,33,3,3,3,3,3,3,3,3,].map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default RelatedProducts