export interface Category {
	id: number;
	name: string;
}

export interface ProductColor {
	name: string;
	value: string;
	bg_class: string;
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
    categories: Category;
	category_id: number;
	slug: string;
    price: number;
    original_price: number;
    rating: number;
    reviews: number;
    in_stock: boolean;
    description: string;
    colour_variants: ProductColor[];
    specifications: ProductSpec[];
    images: ProductImage[];
}

export interface productCard {
	id: number;
	name: string;
	category: string;
	slug: string;
	price: number;
	rating: number;
	reviews: number;
	image1: string;
	image2: string;
	variant: string;
}