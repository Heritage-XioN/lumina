
export interface ProductColor {
	name: string;
	value: string;
	bgClass: string;
}

export interface ProductSpec {
	label: string;
	value: string;
}

export interface ProductImage {
	id: number;
	src: string;
	alt: string;
}

export interface productObj {
	id: number;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    inStock: boolean;
    description: string;
    colors: ProductColor[];
    specifications: ProductSpec[];
    images: ProductImage[];
}

export interface productCard {
	id: number;
	name: string;
	category: string;
	price: number;
	rating: number;
	reviews: number;
	image1: string;
	image2: string;
	variant: string;
}