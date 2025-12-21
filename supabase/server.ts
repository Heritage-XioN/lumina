import { productObj } from '@/types/product';
import { supabase } from './client';



// CRUD
export const fetchCategories = async () => {
	const { error, data } = await supabase.from('categories').select('*');

	// handles error
	if (error) {
		console.error('error with getting product category: ', error);
		return null;
	}

	// returns product if no error
	return data
}


export const fetchAllProduct = async (category_id: number = 1): Promise<productObj[] | null> => {
	// handles fetching products from supabase
    const { error, data } = await supabase.from('products').select('*,images (*), colour_variants (*)').eq("category_id", category_id);

	// handles error
	if (error) {
		console.error('error with getting product: ', error);
		return null;
	}
	

	// returns product if no error
	return data
}

export const fetchProductDetails = async (slug: string): Promise<productObj | null> => {
	// handles fetching products from supabase
    const { error, data } = await supabase.from('products').select('*, images (*), colour_variants (*), specifications (*)').eq('slug', slug);

	// handles error
	if (error) {
		console.error('error with getting product details: ', error);
		return null;
	}
	
	// returns product if no error
	return data[0]
}


